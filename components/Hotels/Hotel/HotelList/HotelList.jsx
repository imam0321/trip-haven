import { getAllHotels } from "@/database/queries";
import HotelCard from "../HotelCard/HotelCard";

export default async function HotelList({ destination, checkIn, checkout }) {
  const allHotels = await getAllHotels(destination, checkIn, checkout);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allHotels.map(hotel => <HotelCard key={hotel} hotelInfo={hotel} checkIn={checkIn} checkout={checkout} />)
        }
      </div>
    </div>
  )
}
