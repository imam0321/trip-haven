"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterByCategory() {
  const stars = ["5", "4", "3", "2", "1"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [query, setQuery] = useState([]);

  // Load existing filters from URL
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setQuery(decodeURIComponent(category).split("|"));
    }
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setQuery((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  // Update URL when query changes (without reloading)
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (query.length > 0) {
      params.set("category", encodeURIComponent(query.join("|")));
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false }); 
  }, [query, replace, pathname, searchParams]);

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form className="flex flex-col gap-2 mt-2">
        {stars.map((star) => (
          <label key={star} htmlFor={`${star}-star`}>
            <input
              type="checkbox"
              name={star}
              id={`${star}-star`}
              checked={query.includes(star)}
              onChange={handleChange}
            />
            {star} Star
          </label>
        ))}
      </form>
    </div>
  );
}
