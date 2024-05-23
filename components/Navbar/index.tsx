"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar({ addBGColor = false }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div
      className={`${styles.navContainer} ${
        addBGColor ? styles.addBGColor : ""
      } ${isScrolled ? styles.scrolled : ""}`}
    >
      <Link className={`${styles.link} `} href={ROUTES.Home}>
        NEWSHUB
      </Link>
    </div>
  );
}
