import FilterByAmenities from "./FilterByAmenities";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import ShortHotel from "./ShortHotel";


export default function AllFilter() {
  return (
    <div className="col-span-3 space-y-4">
      <ShortHotel />
      <FilterByPrice />
      <FilterByCategory />
      <FilterByAmenities />
    </div>
  )
}
