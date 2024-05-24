"use client";
import React from "react";
import styles from "./style.module.scss";
import { getAllNews, getCountryNews } from "@/services/news";
import Spinner from "@/components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";

export default function ApartmentsPage() {
  const {
    data: allNewsData,
    isLoading: allNewsLoading,
    error: allNewsError,
  } = useQuery({
    queryKey: ["allNews"],
    queryFn: getAllNews,
  });

  const scrollToSection = () => {
    const element = document.getElementById("news-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getNews = (value: any) => {
    console.log("allNewsData :>> ", allNewsData);
    console.log("value :>> ", value);
  };

  return (
    <div className={styles.allNewsContainerStyle}>
      {/* {allNewsLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : ( */}
      <>
        <Navbar />
        <section className={styles.HeaderStyle}>
          <h1 className={styles.titleHeaderStyle}>Global News Hub!</h1>
          <p className={styles.descriptionHeaderStyle}>
            Get real-time updates from various trusted sources. Our platform
            aggregates articles on global events, politics, technology, and
            more, all in one easy-to-read format.
          </p>
          <div className={styles.buttonHeaderStyle}>
            <button onClick={scrollToSection}>GET IT</button>
          </div>
        </section>

        <NewsSection handleOnChange={getNews} news={allNewsData!} />
      </>
      {/* )} */}
    </div>
  );
}
