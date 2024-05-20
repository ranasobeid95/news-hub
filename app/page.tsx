"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getAllNews } from "@/services/news";
import Spinner from "@/components/LoadingSpinner";
import Card from "@/components/Card";
import { INews } from "@/types/news";

export default function ApartmentsPage() {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getNews() {
      const { status, data } = await getAllNews();

      if (status === 1) {
        setIsLoading(false);
        setNews(data);
      }
    }
    getNews();
  }, []);
  return (
    <div className={styles.allNewsContainerStyle}>
      {isLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : (
        <section className={styles.HeaderStyle}>
          <h1 className={styles.titleHeaderStyle}>Global News Hub!</h1>
          <p className={styles.descriptionHeaderStyle}>
            Get real-time updates from various trusted sources. Our platform
            aggregates articles on global events, politics, technology, and
            more, all in one easy-to-read format.
          </p>
          <div className={styles.buttonHeaderStyle}>
            <button>GET IT</button>
          </div>
        </section>
      )}
    </div>
  );
}
