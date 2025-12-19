import React, { useState } from "react";
import { useBooking } from "../../hooks/useBooking.js";

export default function BookingBar() {
  const [person, setPerson] = useState(2);
  const [location, setLocation] = useState("");
  const { loading, results, searchBooking } = useBooking();

  const handleSearch = () => {
    searchBooking({ person, location });
  };

  return (
    <section className="w-full py-8">
      <div className="max-w-full px-8">
        <div className="bg-[#eaf1ff] rounded-[42px] w-full flex flex-col md:flex-row 
        md:h-[117px] items-center justify-center gap-6 px-8 py-5">

          {/* Person */}
          <div className="bg-white rounded-xl h-[60px] px-6 flex items-center gap-4 shadow w-full md:w-auto">
            <span className="font-semibold">Person:</span>
            <span className="font-semibold">{person}</span>

            <button onClick={() => setPerson(p => Math.max(1, p - 1))}>-</button>
            <button onClick={() => setPerson(p => p + 1)}>+</button>
          </div>

          {/* Location (click to set) */}
          <div className="bg-white rounded-xl h-[60px] px-6 flex items-center gap-4 shadow w-full md:w-auto">
            <span className="font-semibold">Location:</span>
            <select
              aria-label="Select location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-10 px-3 rounded-lg border border-neutral-200 outline-none w-full md:w-[200px]"
            >
              <option value="">Any</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Sreemangal">Sreemangal</option>
            </select>
          </div>

          {/* Search */}
          <button
            onClick={handleSearch}
            className="bg-[#3252df] text-white font-semibold rounded-xl px-8 h-[50px] w-full md:w-auto"
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </div>

        {/* Show Results */}
        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-3">Results:</h3>

            {results.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded shadow mb-2">
                <p className="font-bold">{item.hotelName}</p>
                <p>{item.location}</p>
                <p>Price: {item.price}</p>
                <p>Rating: {item.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
