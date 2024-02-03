
import dotenv from "dotenv"
import connectDB from "./database/index.js";
import { app } from "./app.js";

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
