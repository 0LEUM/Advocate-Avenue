
import dotenv from "dotenv"
import connectDB from "./database/index.js";
import { app } from "./app.js";
import { User } from "./models/user.models.js";
import { Advocate } from "./models/advocate.models.js";
import { LoginUser } from "./models/login.model.js";
import bcrypt from "bcrypt";

// const app = express()

dotenv.config({
    path: './env'
})




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log("error", error);
        throw error
    })
})
.catch((error) => {
    console.log("MongoDB connenction failed !!!", error);
})


// Register Endpoint 

app.post('/User-Avenue',async (req,res)=>{

    let user = new User()
    user.email = req.body.email;
    user.password = req.body.password;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.phoneNumber = req.body.phoneNumber

    const doc = await user.save();

    console.log(doc)
    res.json(doc)
})

app.get('/User-Avenue',async (req,res)=>{
    const docs = await User.find({})
    res.json(docs)
})

app.post('/Advocate-Avenue',async (req,res)=>{
    try{
    let advocate = new Advocate()
    advocate.email = req.body.email;
    advocate.phoneNumber = req.body.phoneNumber;
    advocate.password = req.body.password
    advocate.firstName = req.body.firstName;
    advocate.lastName = req.body.lastName;
    advocate.universityName = req.body.universityName;
    advocate.regNo = req.body.regNo;
    advocate.dateOfBirth = req.body.dateOfBirth;
    advocate.practicingState = req.body.practicingState;
    advocate.district = req.body.district;
    advocate.chamberAddress=req.body.chamberAddress;
    advocate.barCouncil=req.body.barCouncil;

    const doc = await advocate.save();

    console.log(doc)
    res.json(doc)
    }catch(err){
        console.log(err)
    }
})

app.get('/Advocate-Avenue',async (req,res)=>{
    const docs = await Advocate.find({})
    res.json(docs)
})

// Login Endpoint

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log(user);
        if (user) {
            // Compare hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
