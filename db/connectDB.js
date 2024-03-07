import mongoose from "mongoose";

  const connectDB = async (DATABASE_ur) =>{
   try{
      const DB_OPTIONS = {
         dbName:'SignupDATABSE'
      }
      await mongoose.connect(DATABASE_ur, DB_OPTIONS);
      console.log('Connected Successfully')
   }
   catch(error){
      console.log(error)

   }
 }

 export default connectDB


