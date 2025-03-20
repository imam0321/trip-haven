import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";

const { hotelModel } = require("@/models/hotels-model");
const { replaceMongoIdInArray } = require("@/utils/data-util");

export async function getAllHotels() {
  try {
    const hotels = await hotelModel
      .find()
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ])
      .lean();
    return replaceMongoIdInArray(hotels);
  } catch (error) {
    console.log(error);
  }
}

export async function getRatingsForHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(ratings);
}

export async function getReviewForHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(reviews);
}
