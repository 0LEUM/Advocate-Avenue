import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const advocateSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true,       
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    universityName: {
        type: String,
        required: true,
        trim: true,
    },
    /*barCouncil: {
        type: String,
        required: true,
        trim: true,
        // enum: [''],
    },*/
    regNo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
        trim: true,
    },
    practicingState: {
        type: String,
        required: true,
        trim: true,
    },
    district: {
        type: String,
        required: true,
        trim: true,
    }
}, {timestamps: true})


advocateSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10)
        next();
      } catch (error) {
        throw next(error)
    }

})


export const Advocate = mongoose.model("Advocate", advocateSchema)