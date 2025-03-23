import { getHotelById } from "@/database/queries"
import { getDayDifference } from "@/utils/data-util";


export default async function BookingCard({ booking }) {
  const { hotelId, checkIn, checkout } = booking;
  const hotelInfo = await getHotelById(hotelId);
  const days = getDayDifference(checkIn, checkout);

  const totalCost = ((hotelInfo?.highRate + hotelInfo?.lowRate) / 2) * days;


  return (
    <div className="flex justify-between items-center ">
      <div>
        <h3 className="text-xl font-semibold">{hotelInfo?.name}</h3>
        <div className="text-sm text-gray-600 my-4">
          <p>Check In: {checkIn}</p>
          <p>Check Out: {checkout}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-right">${totalCost}</h3>
        <p className="text-sm text-gray-600">${totalCost / days} per night x {days} days</p>
      </div>
    </div>
  )
}
