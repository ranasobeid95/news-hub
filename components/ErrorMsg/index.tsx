"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./style.module.scss";

export default function ErrorMsg({ error }: any) {
  const errorRef = useRef(null);

  useEffect(() => {
    gsap.set(errorRef.current, {
      visibility: "visible",
      y: "-100%",
      opacity: 0,
    });

    gsap
      .timeline()
      .to(errorRef.current, { opacity: 1, duration: 1, y: "20%" })
      .to(errorRef.current, {
        opacity: 0,
        duration: 1,
        y: "-100%",
        delay: 2,
      });
  }, [error]);

  return (
    <div className={styles.error} ref={errorRef}>
      Error : {error}
    </div>
  );
}
