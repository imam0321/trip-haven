import BookingCard from "../BookingCard/BookingCard";


export default function UpcomingBooking({ bookings }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Up coming Bookings</h2>

      {
        bookings.map(booking => (
          <div key={booking.id} className="bg-[#F6F3E9] p-4 rounded-md">
            <BookingCard booking={booking} />
          </div>
        ))
      }

    </div>
  )
}
