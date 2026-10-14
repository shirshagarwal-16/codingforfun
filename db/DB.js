import mongoose from "mongoose";
import { DB_NAME} from "../src/constants.js";

const connectDB= async ()=>{
    try {
       const connected = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`DataBase connected !! DB Host: ${connected.connection.host}`);
    } catch (error) {
        console.log("MONGODB connnection error ",error);
        process.exit(1);
    }
}

export default connectDB;