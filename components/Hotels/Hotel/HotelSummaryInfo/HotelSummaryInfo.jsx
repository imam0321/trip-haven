import { getReviewForHotel } from "@/database/queries"
import HotelRating from "../HotelRating/HotelRating"
import Link from "next/link";


export default async function HotelSummaryInfo({ fromListPage, info }) {
  const { id, name, city, highRate, lowRate, propertyCategory } = info
  const reviews = await getReviewForHotel(id);

  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{name}</h2>
        <p>📍 {city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={id} />
          {
            reviews?.length === 0 ? <Link href="#" className="underline">Be the first one to review</Link> : <Link href={`/hotel/${id}/reviews`} className="underline">{reviews.length} Reviews</Link>
          }
        </div>
        <div><span className="bg-yellow-400 p-1 rounded-md">{propertyCategory} Star property</span></div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${(highRate + lowRate) / 2}/night</h2>
        <p className=" text-right">Per Night for 4 Rooms</p>
        {
          fromListPage ? (<Link href={`/hotels/${id}`} className="btn-primary ">Details</Link>) : (<button className="btn-primary ">Book</button>)
        }
      </div>
    </>
  )
}
