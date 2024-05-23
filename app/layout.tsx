"use client";
import Navbar from "@/components/Navbar";

import { cairo } from "@/styles/font";
import "@/styles/globals.scss";
import styles from "./style.module.scss";
import { ReactQueryProvider } from "@/components/react-query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cairo.className}>
        {" "}
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
