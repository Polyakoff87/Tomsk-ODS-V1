import React from "react";
import styles from "./News.module.css";
import { Image } from "antd";
import { useGetNewsQuery } from "../../../api/rtkApi";

export default function News() {
  const { data } = useGetNewsQuery();

  const item_news_wrapper = {
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    background: "rgba(41, 53, 21, 0.8)",
    margin: "20px 40px",
    border: "1px solid black",
    borderRadius: "10px"
  };

  const img_wrapper = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  };

  const news_text = {
    margin: "15px",
    textAlign: "justify",
    textIndent: "15px",
    fontSize: "1.0em",
    color: "white",
  };

  const news_date = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  };

  const img = {
    margin: "10px",
  };

  return (
    <div className={styles.news_main_wrapper}>
      {data
        ?.map((el) => {
          return (
            <div style={item_news_wrapper}>
              <div style={img_wrapper}>
                {el.img.map((item) => {
                  return (
                    <div style={img}>
                      <Image
                        key={el.id}
                        alt=""
                        height={200}
                        src={item}
                      />
                    </div>
                  );
                })}
              </div>
              <h5 style={news_date}>{el.date}</h5>
              <p style={news_text}>{el.text}</p>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}
