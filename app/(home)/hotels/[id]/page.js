import Gallery from "@/components/Hotels/HotelDetails/Gallery/Gallery";
import Overview from "@/components/Hotels/HotelDetails/Overview/Overview";
import Summary from "@/components/Hotels/HotelDetails/Summary/Summary";
import { getHotelById } from "@/database/queries";

export default async function HotelDetailsPage({ params: { id } }) {
  const hotelInfo = await getHotelById(id);
  return (
    <>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
}