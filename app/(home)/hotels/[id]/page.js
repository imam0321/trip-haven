import Gallery from "@/components/Hotels/HotelDetails/Gallery/Gallery";
import Overview from "@/components/Hotels/HotelDetails/Overview/Overview";
import Summary from "@/components/Hotels/HotelDetails/Summary/Summary";
import { getHotelById } from "@/database/queries";

export default async function HotelDetailsPage({
  params: { id },
  searchParams: { checkIn, checkout },
}) {
  const hotelInfo = await getHotelById(id, checkIn, checkout);
  return (
    <>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
}
