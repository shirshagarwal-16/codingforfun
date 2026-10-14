import dotenv from "dotenv";
import connectDB from "../db/DB.js";

dotenv.config({
    path : "./env"
});


connectDB()

































// ( async () =>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("error: ",error);
//         throw error;
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is running on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw error
//     }
// })