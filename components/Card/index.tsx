"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import truncateText from "@/utils/shared";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/types/news";

export default function Card({
  data: { urlToImage, title, description, content, author, publishedAt, url },
}: {
  data: NewsArticle;
}) {
  const newsDetailsUrl = `${ROUTES.NEWS_DETAILS}?data=${encodeURIComponent(
    JSON.stringify({
      urlToImage,
      title,
      description,
      content,
      author,
      publishedAt,
      url,
    })
  )}`;

  return (
    <Link className={`${styles.cardContainer} `} href={newsDetailsUrl} passHref>
      <Image
        className={`${styles.imageStyle}`}
        width={300}
        height={150}
        src={urlToImage}
        alt={title}
      ></Image>

      <div className={`${styles.detailsStyle}`}>
        <div className={`${styles.detailsHeaderStyle}`}>
          <span className={`${styles.titleStyle}`}>{title}</span>
        </div>

        <span className={`${styles.detailsContentStyle}`}>
          {truncateText(description, 70)}
        </span>
      </div>
    </Link>
  );
}
