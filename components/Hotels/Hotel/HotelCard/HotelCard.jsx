import Image from "next/image";
import HotelSummaryInfo from "../HotelSummaryInfo/HotelSummaryInfo";

export default function HotelCard({ hotelInfo, checkIn, checkout }) {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px]"
        height={162}
        width={240}
        alt={hotelInfo?.name}
      />
      <HotelSummaryInfo fromListPage={true} info={hotelInfo} checkIn={checkIn} checkout={checkout}/>
    </div>
  )
}

