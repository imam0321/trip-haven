"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";

export default function FilterByCategory() {
  const stars = ["5", "4", "3", "2", "1"]
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setQuery((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );

  }

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        {
          stars.map(star => (
            <label key={star} htmlFor={`${star}-star`}>
              <input type="checkbox" name={star} id={`${star}-star`} onChange={handleChange} />{star} Star
            </label>
          ))
        }
      </form>
    </div>
  )
}
