"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { getAllNews, getCountryNews } from "@/services/news";
import Spinner from "@/components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";
import useAllNews from "@/hooks/news";
import ErrorMsg from "@/components/ErrorMsg";

export default function AllNewsPage() {
  const [searchValue, setSearchValue] = useState("Gaza");

  const {
    data: allNewsData,
    isLoading: allNewsLoading,
    error: allNewsError,
  } = useAllNews(searchValue);

  return (
    <div className={styles.allNewsContainerStyle}>
      <NewsSection
        handleOnChange={(value: any) => {
          setSearchValue(value);
        }}
        news={allNewsData}
        loading={allNewsLoading}
      />

      {allNewsError && <ErrorMsg error={allNewsError.message} />}
    </div>
  );
}
