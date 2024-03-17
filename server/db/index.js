import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}` );
    console.log(`db connected Host!!  ${connectionInstance.connection.host} `);
  } catch (error) {
    console.log("Error while connecting to database : " + error);
    process.exit(1);
  }
};
