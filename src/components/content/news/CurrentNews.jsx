import React from "react";
import styles from "./CurrentNews.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function CurrentNews() {
  const { link } = useParams();
  const select = useSelector((state) => state.newsSlider);

  let render = function (i) {
    return (
      <div className={styles.news_main_wrapper}>
        <div className={styles.item_news_wrapper}>
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
            {select[i].img.map((item) => (
              <div className={styles.img_wrapper}>
                <img
                  key={item.id}
                  alt=""
                  className={styles.news_img}
                  src={item}
                />
              </div>
            ))}
          </Carousel>
          <h5 className={styles.news_date}>{select[i].date}</h5>
          <p className={styles.news_text}>{select[i].text}</p>
        </div>
      </div>
    );
  };

  let res;

  switch (link) {
    case "19.01.2024":
      res = render(0);
      break;

    case "24.01.2024":
      res = render(1);
      break;

    case "03.02.2024":
      res = render(2);
      break;

    case "16.02.2024":
      res = render(3);
      break;

    case "29.02.2024":
      res = render(4);
      break;

    case "02.03.2024":
      res = render(5);
      break;

    case "02.03.2024.":
      res = render(6);
      break;

    case "05.03.2024":
      res = render(7);
      break;

    case "25.03.2024":
      res = render(8);
      break;

    case "30.03.2024":
      res = render(9);
      break;

    case "13.04.2024":
      res = render(10);
      break;

    case "14.04.2024":
      res = render(11);
      break;

    case "15.04.2024":
      res = render(12);
      break;

    case "17.04.2024":
      res = render(13);
      break;

    case "17.04.2024.":
      res = render(14);
      break;

    case "18.04.2024":
      res = render(15);
      break;

    case "22.04.2024":
      res = render(16);
      break;

    case "28.04.2024":
      res = render(17);
      break;

    case "10.05.2024":
      res = render(18);
      break;

    case "10.05.2024.":
      res = render(19);
      break;
    
      case "28.05.2024":
      res = render(20);
      break;

    default:
  }

  return <>{res}</>;
}
