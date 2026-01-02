import mongoose from "mongoose"

import {ENV} from "./env.js"

export const connectDB = async()=>{
    try {
        if(!ENV.DB_URL){
            throw new Error("DB_URL is not define in environment ")
        }
         const conn = await mongoose.connect(ENV.DB_URL)
         console.log("Connected to mongoose", conn.connection.host)
    } catch (error){
       console.error("error connecting to mongo ",error);
       process.exit(1);
    }
}