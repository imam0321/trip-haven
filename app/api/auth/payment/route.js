import { bookingModel } from "@/models/booking-model";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { hotelId, userId, checkIn, checkout } = await request.json();

  await dbConnect();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkIn,
    checkout,
  };
  try {
    await bookingModel.create(payload);
    return NextResponse.json("A new booking has been made.", {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}
