import mongoose, { Schema } from "mongoose";
import { TaskStatusEnum, availableTaskStatuses } from "../utils/constants.js"

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true,"title is required"],
        trim: true
    },
    description: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: availableTaskStatuses,
        default: TaskStatusEnum.TODO,
        required: true
    },
    attachements: {
        type: [
            {
                url: String,
                mimetype: String,
                size: Number
            }],
        default: []
    }
}, { timestamps: true })

export const Task = mongoose.model("Task", taskSchema)