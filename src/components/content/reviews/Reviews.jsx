import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Reviews.module.css";
import { Card, Button } from "antd";
import {
  useGetReviewsQuery,
  useDeleteReviewMutation,
} from "../../../api/rtkApi";

export default function Reviews() {
  const { data: reviews, refetch } = useGetReviewsQuery();

  const [deleteReview] = useDeleteReviewMutation();

  let navigate = useNavigate();

  function addReview() {
    navigate("/addReview");
  }

  const handleDeleteReview = async (id) => {
    await deleteReview(id);
    refetch(); // Refetch reviews after deletion
  };

  return (
    <div className={styles.wrapper}>
      <AddButton addReview={addReview}></AddButton>
      <div className={styles.reviews_wrapper}>
        {reviews?.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <Card
                title={el.author}
                bordered={false}
                style={{
                  width: 300,
                  background: "rgba(41, 53, 21, 0.8)",
                }}
              >
                <div>{el.text}</div>
              </Card>
              <Button danger type="primary" onClick={() => handleDeleteReview(el.id)}>Удалить отзыв</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AddButton({ addReview }) {
  return (
    <button onClick={(e) => addReview(e)} className={styles.add_btn}>
      Добавить отзыв
    </button>
  );
}
