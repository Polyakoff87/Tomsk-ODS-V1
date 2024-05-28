import React from "react";
import NameBoard from "./nameBoard/NameBoard";
// import Symbol from "./symbol/Symbol";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      {/* <Symbol /> */}
      <NameBoard />
    </div>
  );
}
