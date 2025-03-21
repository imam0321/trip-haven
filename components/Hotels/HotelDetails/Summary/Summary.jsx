import HotelSummaryInfo from "../../Hotel/HotelSummaryInfo/HotelSummaryInfo";


export default function Summary({hotelInfo}) {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" info={hotelInfo}/>
      </div>
    </section>
  )
}
