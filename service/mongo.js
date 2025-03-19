import mongoose from "mongoose";

export async function dbConnect(params) {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_DB_URL));
    return conn;
  } catch (error) {
    console.log(error);
  }
}
