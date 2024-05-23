"use client";
import { getCountryNews } from "@/services/news";
import { useState } from "react";
import styles from "./style.module.scss";
import { NewsArticle } from "@/types/news";
import { useQuery } from "@tanstack/react-query";

export default function CountryNews() {
  const [selectedCountry, setSelectedCountry] = useState<string>("USA"); // Default selected country

  // const { data, isLoading, error } = useQuery<any, Error>(
  //   ["countryNews", selectedCountry],
  //   () => getCountryNews(selectedCountry),
  //   { enabled: !!selectedCountry } // Disable query until a country is selected
  // );

  // Function to handle dropdown change
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  // Render logic based on the loading state, error, and data

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value='USA'>USA</option>
        <option value='UK'>UK</option>
        {/* Add more options for other countries */}
      </select>
      {/* Render based on loading state, error, and data */}
    </div>
  );
}
