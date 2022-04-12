import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Url({ link }) {
  const { url, title } = link;
  return (
    <Link href={url}>
      <a className="text-3xl py-4 border border-black rounded-lg my-3">
        {title}
      </a>
    </Link>
  );
}
