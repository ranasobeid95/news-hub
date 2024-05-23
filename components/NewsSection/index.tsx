"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import truncateText from "@/utils/shared";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/types/news";
import newsArticles from "@/constants/data";
import Card from "../Card";

export default function NewsSection({
  news = [...newsArticles],
}: {
  news: NewsArticle[];
}) {
  return (
    <div id='news-section' className={`${styles.NewsSectionContainer}`}>
      <h1 className={`${styles.NewsSectionTitle}`}>Latest News</h1>
      <div className={`${styles.NewsSectionList}`}>
        {news.map((newsArticle) => (
          <Card data={newsArticle} />
        ))}
      </div>
    </div>
  );
}
