import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.MONGODB_URI);
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo DB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONOGODB connection failed: ",error);
        process.exit(1);
    }
    
}
export default connectDB;