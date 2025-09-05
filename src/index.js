import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({path: '/.env'});

const port = process.env.PORT;

connectDB()
.then((response)=>{
    app.on('error',()=>{
        console.log("Aplication not connected to Data Base: ",error);
        throw error;
    })
    app.listen(port || 8000,()=>{
        console.log(`Server is running at ${port}`);
    })
})
.catch((error)=>console.log("MONGO db connection failed !!!",error))

/*
import express from "express";
const app = express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error',(error)=>{
            console.log("Application not connected to Data Base",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is litsing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
    }
})()
*/