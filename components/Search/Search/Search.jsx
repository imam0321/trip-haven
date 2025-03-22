'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search({ fromList, destination, checkIn, checkout }) {
  const cities = ["Puglia", "Catania", "Kerkira", "Frejus", "Paris"];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkIn: checkIn,
    checkout: checkout
  })
  const [allowSearch, setAllowSearch] = useState(true);
  
  // input value set handler 
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value

    const state = { ...searchTerm, [name]: value }

    if (new Date(state?.checkIn).getTime() > new Date(state?.checkout).getTime()) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    setSearchTerm(state);
  }
  
  // search button action handler
  const doSearch = () => {
    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm?.destination);
    if (searchTerm?.checkIn && searchTerm?.checkout) {
      params.set("checkIn", searchTerm?.checkIn);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes('hotels')) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  }

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          {/* Destination select filed */}
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination" defaultValue={searchTerm?.destination} onChange={handleInputs}>
                {
                  cities.map(city => <option key={city} value={city}>{city}</option>)
                }
              </select>
            </h4>
          </div>
          {/* Check In input filed */}
          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="checkIn" id="checkIn" value={searchTerm?.checkIn} onChange={handleInputs} />
            </h4>
          </div>
          {/* Check Out input filed*/}
          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="checkout" id="checkout" value={searchTerm?.checkout} onChange={handleInputs} />
            </h4>
          </div>
        </div>
      </div>

      <button disabled={!allowSearch} onClick={doSearch} className="search-btn">🔍️ {fromList ? "Modify Search" : "Search"}</button>
    </>
  )
}
