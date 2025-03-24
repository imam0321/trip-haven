import HotelList from "@/components/Hotels/Hotel/HotelList/HotelList";
import AllFilter from "@/components/Search/Filter/AllFilter";
import Search from "@/components/Search/Search/Search";

const refinedCategory = (category) => {
  const decodedCategory = decodeURI(category);
  if (decodedCategory === "undefined") {
    return "";
  }
  return decodedCategory;
};

export default function HotelListPage({
  searchParams: { destination, checkIn, checkout, category },
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
          <AllFilter />
          <HotelList
            destination={destination}
            checkIn={checkIn}
            checkout={checkout}
            category={refinedCategory(category)}
          />
        </div>
      </section>
    </>
  );
}
