import { getRatingsForHotel } from "@/database/queries"


export default async function HotelRating({id}) {
  const ratings = await getRatingsForHotel(id)
  
  let avgRating = 0;
  if (ratings.length === 1) {
    avgRating = ratings[0];
  }
  if (ratings.length > 1) {
    avgRating = ratings.reduce((item, currentItem) => {
      return (item.rating + currentItem.rating)
    }) / ratings.length
  }
  

  return (
    <div>
      <span className="font-medium">Very Good</span>
      <span>{avgRating} Reviews</span>
    </div>
  )
}
