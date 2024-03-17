import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const ConnectDB = async () => {
  try {
    const mongooseString=`${process.env.MONGO_URI}/${DB_NAME}`
    // console.log('====================================');
    // console.log(mongooseString);
    // console.log('====================================');
    const connectionInstance = await mongoose.connect(mongooseString );
    console.log(`db connected Host!!  ${connectionInstance.connection.host} `);
  } catch (error) {
    console.log("Error while connecting to database : " + error);
    process.exit(1);
  }
};
