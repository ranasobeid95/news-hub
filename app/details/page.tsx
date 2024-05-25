"use client";
import React from "react";
import styles from "./style.module.scss";
import { getAllNews, getCountryNews } from "@/services/news";
import Spinner from "@/components/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import NewsSection from "@/components/NewsSection";
import Navbar from "@/components/Navbar";

export default function DetailsPage() {
  return (
    <div className={styles.allNewsContainerStyle}>
      <section className={styles.HeaderStyle}> Deta</section>
    </div>
  );
}
