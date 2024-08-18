import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI as string;
    
    console.log("connectToMongo",MONGO_URI);
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to MongoDB");
    }).catch((error) => {
      console.error('Error connecting to MongoDB', error);
    });
  } catch (error) {
    console.error(error);
  }
};
