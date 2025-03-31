import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection Failed", error);
        process.exit(1); //Exit if connection fails
    }
}

export default connectDB;