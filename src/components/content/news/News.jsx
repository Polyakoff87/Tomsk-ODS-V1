import React from "react";
import styles from "./News.module.css";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 576 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function News() {
  const select = useSelector((state) => state.newsSlider);
  const [current, setCurrent] = useState({
    windowWidth: window.innerWidth,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(window.innerWidth);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.news_main_wrapper}>
      {current < 576 ? (
        <>
          {select.map((el) => {
            return (
              <div key={el.id} className={styles.item_news_wrapper}>
                <div className={styles.img_wrapper}>
                  <img alt="" className={styles.news_img} src={el.url}></img>
                </div>
                <h5 className={styles.news_date}>{el.date}</h5>
                <p className={styles.news_text}>{el.text}</p>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {select.map((el) => {
            return (
              <div key={el.id} className={styles.item_news_wrapper}>
                <Carousel
                  className={styles.carousel}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={5000}
                  autoPlay={false}
                  // keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {el.img.map((item) => {
                    return (
                      <div className={styles.img_wrapper}>
                        <img
                          key={el.id}
                          alt=""
                          className={styles.news_img}
                          src={item}
                        />
                      </div>
                    );
                  })}
                </Carousel>
                <h5 className={styles.news_date}>{el.date}</h5>
                <p className={styles.news_text}>{el.text}</p>
              </div>
            );
          }).reverse()}
        </>
      )}
    </div>
  );
}
