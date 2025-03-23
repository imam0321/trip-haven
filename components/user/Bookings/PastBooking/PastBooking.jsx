import BookingCard from "../BookingCard/BookingCard";


export default function PastBooking({ bookings }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
      
        {
          bookings.map(booking => <div key={booking.id} className="bg-[#ebf6e9] p-4 rounded-md"><BookingCard booking={booking} /></div>)
        }
      
    </div>
  )
}
