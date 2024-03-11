import  mongoose  from "mongoose";



export const ConnectDB=async()=>{
    try {
        await mongoose.connect()
        console.log("db connected");
        
    } catch (error) {
        console.log("Error while connecting to database : " + error);
        process.exit(1);
    }

}