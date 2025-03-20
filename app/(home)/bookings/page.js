import { auth } from "@/auth";
import PastBooking from "@/components/user/Bookings/PastBooking/PastBooking";
import UpcomingBooking from "@/components/user/Bookings/UpcomingBooking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo/ProfileInfo";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
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
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}
