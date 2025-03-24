import { getAllHotels } from "@/database/queries";
import HotelCard from "../HotelCard/HotelCard";
import NoHotels from "../../NoHotels/NoHotels";

export default async function HotelList({ destination, checkIn, checkout, category }) {
  const allHotels = await getAllHotels(destination, checkIn, checkout, category);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allHotels > 0 ? (
            allHotels.map(hotel => <HotelCard
              key={hotel}
              hotelInfo={hotel}
              checkIn={checkIn}
              checkout={checkout} />)
          ) : (<NoHotels />)
        }
      </div>
    </div>
  )
}
