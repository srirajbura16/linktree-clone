import React from "react";
import styles from "../../styles/FormLayout.module.css";

export default function FormLayout({ children }) {
  return (
    <div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
