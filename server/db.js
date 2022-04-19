import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js";


export async function clientDB(){
    try{
      await mongoose.connect(MONGODB_URI)
      console.log("Conectada la base de datos");
    }catch (error){
      console.log(error);
    }
}