import express,{ Express } from "express";
import dotenv from "dotenv"
import router from "./routes/taskRoutes";
import { connectDB } from "./db/connect";
import { notFound } from "./middlewares/notFound";

dotenv.config()
const app:Express = express();
const port = process.env.PORT
const url = process.env.URL

app.use(express.json())
app.use(express.static("./public"))
app.use("/api/v1/tasks/",router)
app.use(notFound)


const start = async() => {
    try{
        await connectDB(url!)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port} ⚡⚡`)
        })
    } catch(err){
        console.log(err)
    }
}

start();