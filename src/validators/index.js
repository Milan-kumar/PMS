import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("email is required")
            .isEmail().withMessage("Invalid email"),
        body('username')
            .trim()
            .notEmpty().withMessage("username is required")
            .isLength({ min: 3 }).withMessage("username should be atleasr 3 characters")
            .isLength({ max: 13 }).withMessage("username shouldn't exceed 12 char"),
        body('password')
            .trim()
            .notEmpty().withMessage("password is required")
            .isLength({ min: 5 }).withMessage("password must be atleast 5 characters long")
            .isLength({ mx: 10 }).withMessage("password shouldn't exceed 10 characters")
        // .match()
    ]
}

const userLoginValidator = () => {
    return [
        body('email')
            .trim()
            .isEmail().withMessage("email is not valid")
            .isEmpty().withMessage("email is required")
        ,
        body('password')
            .notEmpty().withMessage("password is required")
    ]
}

export { userRegistrationValidator, userLoginValidator }