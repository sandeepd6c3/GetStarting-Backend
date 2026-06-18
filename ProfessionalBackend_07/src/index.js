import dns from "node:dns/promises";
import dotenv from "dotenv";
import connectDB from "../db/DB_index.js";
import app from "./app.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch((err) => {
  console.log("MongoDB connection failed !!!", err);
});








/*
import express from 'expross';
const app = express()

(async () =>{
    try {
        await mongoose.connect(`process.env.${MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error hai !",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is listening on port "`${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error",error)
        throw error
    }
})()
    */