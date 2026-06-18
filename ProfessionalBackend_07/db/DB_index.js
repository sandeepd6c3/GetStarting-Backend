import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: DB_NAME
      }
    );
    console.log(
      `\nMongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Failed !", error);
    process.exit(1);
  }
};

export default connectDB;





// import mongoose from 'mongoose';
// import { DB_NAME } from '../src/constants.js';

// const connectDB = async () => {
//     console.log(process.env.MONGODB_URI);
//   try {
//   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   console.log(`\n mongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
  
//   } catch (error) {
//     console.log('MongoDB connection Failed !', error);
//     process.exit(1);
//   }
// };

// export default connectDB