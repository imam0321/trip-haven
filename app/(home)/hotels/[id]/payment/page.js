import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PaymentForm from "@/components/Payment/PaymentForm";
import { getHotelById, getUserByEmail } from "@/database/queries";
import { getDayDifference } from "@/utils/data-util";

export default async function PaymentPage({
  params: { id },
  searchParams: { checkIn, checkout },
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const loggedUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkIn, checkout);

  const hasCheckInCheckOut = checkIn && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckInCheckOut) {
    const days = getDayDifference(checkIn, checkout);
    cost = cost * days;
  }

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px] border border-gray-700/20">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and total price is{" "}
          <b>${cost}</b>{" "}
          <b>
            {" "}
            {hasCheckInCheckOut &&
              `for ${getDayDifference(checkIn, checkout)} days.`}
          </b>
        </p>
        <PaymentForm
          loggedUser={loggedUser}
          hotelInfo={hotelInfo}
          checkIn={checkIn}
          checkout={checkout}
          cost={cost}
        />
      </div>
    </section>
  );
}
