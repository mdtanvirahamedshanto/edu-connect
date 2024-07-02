import mongoose from "mongoose";

export default async function connectDb(){
    try {
     const connection =  await mongoose.connect(String(process.env.MONGO_URI))
     return connection;
    } catch (error) {
        console.log(error);
    }
}