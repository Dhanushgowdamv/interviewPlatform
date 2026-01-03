import express from "express";
import path from "path";
import {ENV} from "./lib/env.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express"
import { inngest } from "./lib/inngest.js";

const app = express();
console.log(ENV.PORT)
console.log(ENV.DB_URL)

const __dirname = path.resolve()


//middleware
app.use(express.json())
//server allows the brower to include teh cookies in the request =>credentials:true meaning
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("api/inngest", serve({client:inngest,
    functions:[]}))


app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from api"})

});
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"sucess from api bookfh"})

});
 
// make our app ready for deployment
if(ENV.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname ,"../frontend","dist","index.html"));
    })
}



const startserver = async () =>{
    try{
        await connectDB();
        app.listen(ENV.PORT,()=>console.log("server is riunning",ENV.PORT));
    }catch (error){
       console.error("error starting teh server ", error);
    }
}

startserver();