

export default function Search({ fromList }) {
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList && "!shadow-none"}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination">
                <option value="Bali">Bali</option>
                <option value="Bali">Cox Bazar</option>
                <option value="Bali">Sylhet</option>
                <option value="Bali">Saint Martin</option>
                <option value="Bali">Bali</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="check-in" id="check-in" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="check-out" id="check-out" />
            </h4>
          </div>
        </div>
      </div>

      <button className="search-btn">🔍️ {fromList ? "Modify Search" : "Search"}</button>
    </>
  )
}
