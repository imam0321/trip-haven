const { hotelModel } = require("@/models/hotels-model");
const { replaceMongoIdInArray } = require("@/utils/data-util");

export async function getAllHotels() {
  try {
    const hotels = await hotelModel.find().lean();
    return replaceMongoIdInArray(hotels);
  } catch (error) {
    console.log(error);
  }
}
