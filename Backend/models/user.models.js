import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt"


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
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
    phoneNumber: {
        type: String, 
        required: true,
        trim: true,
        unique: true,
    }
}, {timestamps: true})

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

   try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
   } catch (error) {
        return next (error);
   } 
})

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
  
//     try {
//       this.password = await bcrypt.hash(this.password, 10);
//       next();
//     } catch (error) {
//       return next(error);
//     }
//   });


export const User = mongoose.model("User", userSchema)