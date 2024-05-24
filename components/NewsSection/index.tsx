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
import Input from "../Input";
import { INPUT_TYPES } from "@/types/shared";
import Search from "../Icons/Search";

export default function NewsSection({
  news = [...newsArticles],
  handleOnChange,
}: {
  news: NewsArticle[];
  handleOnChange: (value: any) => void;
}) {
  return (
    <div id='news-section' className={`${styles.NewsSectionContainer}`}>
      <h1 className={`${styles.NewsSectionTitle}`}>Latest News</h1>
      <Input
        type={INPUT_TYPES.TEXT}
        name={"Search"}
        placeholder={"Search"}
        width={"50%"}
        leadingIcon={<Search />}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <div className={`${styles.NewsSectionList}`}>
        {news.map((newsArticle) => (
          <Card data={newsArticle} key={newsArticle.title} />
        ))}
      </div>
    </div>
  );
}
