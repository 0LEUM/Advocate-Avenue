import { Schema } from "mongoose";
import mongoose from "mongoose";


const newSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})

export const LoginUser = mongoose.model("LoginUser", newSchema)