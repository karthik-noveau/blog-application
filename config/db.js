import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to MongoDB Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MONGO connect Error ${error}`);
  }
};
