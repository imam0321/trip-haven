import Image from "next/image";
import HotelSummaryInfo from "../HotelSummaryInfo/HotelSummaryInfo";


export default function HotelCard() {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src="/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        height={162}
        width={240}
        alt="hotel"
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  )
}
