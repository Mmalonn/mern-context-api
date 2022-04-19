import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

export async function clientDB(){
    try{
      await mongoose.connect(process.env.URI)
      console.log("Conectada la base de datos");
    }catch (error){
      console.log(error);
    }
}