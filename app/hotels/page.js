import HotelList from "@/components/Hotels/Hotel/HotelList/HotelList";
import Filter from "@/components/Search/Filter/Filter";
import Search from "@/components/Search/Search/Search";

export default function HotelListPage() {
  return (
    <>
      <section class="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center pb-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section class="py-12">
        <div class="container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </>
  );
}
