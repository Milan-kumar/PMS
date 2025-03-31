import { asyncHandler } from "../utils/async-handler"

const registerUser = asyncHandler(async (req, res) => {
    const { emil, username, password, role } = req.body;

    //validation
    registrationValidation(body);
})

export { registerUser };