import { getAllHotels } from "@/database/queries";
import HotelCard from "../HotelCard/HotelCard";


export default async function HotelList() {
  const hotels = await getAllHotels();
  // console.log(hotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        <HotelCard />
      </div>
    </div>
  )
}
