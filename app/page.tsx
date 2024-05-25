"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { getAllNews, getCountryNews } from "@/services/news";
import Spinner from "@/components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";
import useAllNews from "@/hooks/news";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function ApartmentsPage() {
  const [searchValue, setSearchValue] = useState("Gaza");
  const {
    data: allNewsData,
    isLoading: allNewsLoading,
    error: allNewsError,
  } = useAllNews(searchValue);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const title = new SplitType("#title");
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });
    tl.from(
      ".char",
      { y: 0, stagger: 0.08, delay: 0.05, duration: 0.5 },
      "-=0.3"
    );
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById("news-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.allNewsContainerStyle}>
      <>
        <Navbar />
        <section
          className={`${styles.allNewsContainerStyle} ${styles.HeaderStyle}`}
          ref={containerRef}
        >
          <h1 className={styles.titleHeaderStyle} ref={titleRef} id='title'>
            Global News Hub!
          </h1>
          <p className={styles.descriptionHeaderStyle} ref={descriptionRef}>
            Get real-time updates from various trusted sources. Our platform
            aggregates articles on global events, politics, technology, and
            more, all in one easy-to-read format.
          </p>
          <div ref={buttonRef}>
            <button onClick={scrollToSection}>GET IT</button>
          </div>
        </section>

        <NewsSection
          handleOnChange={(value: any) => {
            setSearchValue(value);
          }}
          loading={allNewsLoading}
          news={allNewsData}
          numberOfItems={6}
        />
      </>
    </div>
  );
}
