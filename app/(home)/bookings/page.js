import { auth } from "@/auth";
import PastBooking from "@/components/user/Bookings/PastBooking/PastBooking";
import UpcomingBooking from "@/components/user/Bookings/UpcomingBooking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo/ProfileInfo";
import { getBookingByUser, getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const loggedInUser = await getUserByEmail(session?.user?.email);
  const bookings = await getBookingByUser(loggedInUser?.id);

  const now = new Date().getTime();
  
  const pastBookings = bookings.filter((booking) => {
    return now > new Date(booking?.checkout).getTime(); 
  });

  const currentBookings = bookings.filter((booking) => {
    return (
      now >= new Date(booking?.checkIn).getTime() &&
      now <= new Date(booking?.checkout).getTime()
    );
  });

  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking bookings={pastBookings} />
            <UpcomingBooking bookings={currentBookings} />
          </div>
        </div>
      </section>
    </>
  );
}
