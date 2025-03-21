import HotelList from "@/components/Hotels/Hotel/HotelList/HotelList";
import Filter from "@/components/Search/Filter/Filter";
import Search from "@/components/Search/Search/Search";

export default function HotelListPage({
  searchParams: { destination, checkIn, checkout },
}) {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center pb-12 ">
          <Search
            fromList={true}
            destination={destination}
            checkIn={checkIn}
            checkout={checkout}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList
            destination={destination}
            checkIn={checkIn}
            checkout={checkout}
          />
        </div>
      </section>
    </>
  );
}
