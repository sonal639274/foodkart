import mongoose from "mongoose";

// const mongo = process.env.MONGO
export const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://sonal:mongodb@cluster0.gdz6k.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("mongo connected");
    })
}