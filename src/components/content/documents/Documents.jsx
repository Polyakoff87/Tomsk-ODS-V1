import React from "react";
import styles from "./Documents.module.css";
import { useState, useEffect } from "react";

export default function Documents() {
  const [current, setCurrent] = useState({
    windowWidth: window.innerWidth,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent( window.innerWidth );
    }, 100)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.documents_container}>
      <h1 className={styles.title}>Наш Устав</h1>
      <div className={styles.docWrapper}>
        {current < 992 ? (
          <iframe
            title="This is a unique title"
            src="https://drive.google.com/file/d/1XJNN4Qq-lPXyGV_Lysg6yA3yBUQ_qhG8/preview"
            width="300"
            height="950"
            allow="autoplay"
          ></iframe>
        ) : (
          <iframe
            title="This is a unique title"
            src="https://drive.google.com/file/d/1XJNN4Qq-lPXyGV_Lysg6yA3yBUQ_qhG8/preview"
            width="850"
            height="950"
            allow="autoplay"
          ></iframe>
        )}
      </div>
    </div>
  );
}
