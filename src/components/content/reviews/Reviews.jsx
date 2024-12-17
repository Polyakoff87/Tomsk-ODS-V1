import React, { useState } from "react";
import styles from "./Reviews.module.css";
import { Card } from "antd";

export default function Reviews() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Card
          title="Автор"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>Текст отзыва</p>
        </Card>
      </div>
      <div className={styles.item}>
        <Card
          title="Автор"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>Текст отзыва</p>
        </Card>
      </div>
      <div className={styles.item}>
        <Card
          title="Автор"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>Текст отзыва</p>
        </Card>
      </div>
      
    </div>
  );
}
