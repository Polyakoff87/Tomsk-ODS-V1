import React from "react";
import styles from "./Documents.module.css";

export default function Documents() {
  return (
    <div className={styles.documents_container}>
      <div className={styles.doc}>
        <iframe
          title="This is a unique title"
          src="https://drive.google.com/file/d/1RsHxDIMdkC1KhMCGiLnCqbmjRr4fEXbi/preview"
          width="350"
          height="500"
          allow="autoplay"
        ></iframe>
      </div>

      <div className={styles.doc}>
        <iframe
          title="This is a unique title"
          src="https://drive.google.com/file/d/1fkFNiSJ7EMtrLx1M-Hz8xyioJMkDs4hU/preview"
          width="350"
          height="500"
          allow="autoplay"
        ></iframe>
      </div>

      <div className={styles.doc}>
        <iframe
          title="This is a unique title"
          src="https://drive.google.com/file/d/1XJNN4Qq-lPXyGV_Lysg6yA3yBUQ_qhG8/preview"
          width="350"
          height="500"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
