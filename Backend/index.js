
import dotenv from "dotenv"
import connectDB from "./database/index.js";
import { app } from "./app.js";
import { User } from "./models/user.models.js";
import { Advocate } from "./models/advocate.models.js";
import { log } from "console";


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