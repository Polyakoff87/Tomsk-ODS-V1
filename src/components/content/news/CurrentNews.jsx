import React, { useState, useEffect } from "react";
import styles from "./CurrentNews.module.css";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import { useGetCurrentNewsQuery } from "../../../api/rtkApi";

export default function CurrentNews() {
  const { link } = useParams();
  const currentLink = link;
  const [query, setQuery] = useState(`${currentLink && `date=${currentLink}`}`);

  const { data } = useGetCurrentNewsQuery(query);
  let currentData;
  useEffect(() => {
    setQuery(`${currentLink && `date=${currentLink}`}`);
  }, [currentLink]);
  currentData = data ? data[0] : undefined;


  const item_news_wrapper = {
    height: "max-content",
    background: "rgba(41, 53, 21, 0.8)",
    margin: "20px 40px",
    border: "1px solid black",
    color: "white",
    borderRadius: "10px"
  };

  const img_wrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  };

  const img = {
    margin: "10px",
  };

  return (
    <div className={styles.news_main_wrapper}>
      <div style={item_news_wrapper}>
        <div style={img_wrapper}>
          {currentData?.img.map((item) => (
            <div style={img}>
              <Image
                key={item.id}
                alt=""
                src={item}
                // width={300}
                height={200}
              />
            </div>
          ))}
        </div>
        <h5 className={styles.news_date}>{currentData?.date}</h5>
        <p className={styles.news_text}>{currentData?.text}</p>
      </div>
    </div>
  );
}
