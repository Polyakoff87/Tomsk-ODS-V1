import React, { useState } from "react";
import {useNavigate} from 'react-router';
import styles from "./Reviews.module.css";
import { Card } from "antd";
import { useGetReviewsQuery } from "../../../api/rtkApi";

export default function Reviews() {
  const { data } = useGetReviewsQuery();

  let navigate = useNavigate()
  function addReview() {
    navigate('/addReview')
  }



  return (
    <div className={styles.wrapper}>
      <Button addReview={addReview}></Button>
      <div className={styles.reviews_wrapper}>
        {data?.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <Card
                title={el.author}
                bordered={false}
                style={{
                  width: 300,
                  background: "rgba(41, 53, 21, 0.8)"
                }}
              >
                <div>{el.text}</div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Button({addReview}) {
  return (
    <button
      onClick={(e) => addReview(e)}
      className={styles.add_btn}
    >
      Добавить отзыв
    </button>
  );
}
