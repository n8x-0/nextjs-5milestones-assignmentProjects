import mongoose from "mongoose";

let isConnected = false; 

export default async function mongoDBconnection() {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI || "");
    isConnected = !!connection.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}
