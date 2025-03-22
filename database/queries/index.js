import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { hotelModel } from "@/models/hotels-model";
import {
  isDateInBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import { bookingModel } from "@/models/booking-model";
import { userModel } from "@/models/user-model";

export async function getAllHotels(destination, checkIn, checkout) {
  try {
    const regex = new RegExp(destination, "i");
    const hotelsByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ])
      .lean();

    let allHostels = hotelsByDestination;

    if (checkIn && checkout) {
      allHostels = await Promise.all(
        allHostels.map(async (hotel) => {
          const found = await findBooking(hotel._id, checkIn, checkout);
          if (found) {
            hotel["isBooked"] = true;
          } else {
            hotel["isBooked"] = false;
          }

          return hotel;
        })
      );
    }

    return replaceMongoIdInArray(allHostels);
  } catch (error) {
    console.log(error);
  }
}

async function findBooking(hotelId, checkIn, checkout) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    return (
      isDateInBetween(checkIn, match.checkIn, match.checkout) ||
      isDateInBetween(checkout, match.checkIn, match.checkout)
    );
  });
  return found;
}

export async function getHotelById(hotelId, checkIn, checkout) {
  const hotel = await hotelModel.findById(hotelId).lean();

  if (checkIn && checkout) {
    const found = await findBooking(hotel._id, checkIn, checkout);
    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }

  return replaceMongoIdInObject(hotel);
}

export async function getRatingsForHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(ratings);
}

export async function getReviewForHotel(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
  return replaceMongoIdInArray(reviews);
}

export async function getUserByEmail(email) {
  const users = await userModel.find({ email: email }).lean();
  return replaceMongoIdInObject(users[0]);
}
