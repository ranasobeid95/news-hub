import Link from "next/link";
import styles from "./style.module.scss";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={`${styles.navContainer} `}>
      <Link className={`${styles.link} `} href={ROUTES.Home}>
        NEWSHUB
      </Link>
    </div>
  );
}
