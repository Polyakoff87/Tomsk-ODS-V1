import styles from "./Main.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Main() {
  const select = useSelector((state) => state.newsSlider);
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
    <div className={styles.main_wrapper}>
      <h2 className={styles.news_title}>Наши Новости</h2>
      {current < 400 ? (
        <li>
          {select.map((el) => {
            return (
              <div key={el.id} className={styles.item}>
                <Link className={styles.link} to={`/news/${el.date}`}>
                  <div className={styles.img_wrapper}>
                    <img alt="" className={styles.news_img} src={el.url}></img>
                  </div>
                  <h5>{el.date}</h5>
                  <p className={styles.news_text}>{el.text}</p>
                </Link>
              </div>
            );
          })}
        </li>
      ) : (
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
          autoPlay={true}
          // keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {select.map((el) => {
            return (
              <div key={el.id} className={styles.item}>
                <Link className={styles.link} to={`/news/${el.date}`}>
                  <div className={styles.img_wrapper}>
                    <img alt="" className={styles.news_img} src={el.url}></img>
                  </div>
                  <h5>{el.date}</h5>
                  <p className={styles.news_text}>{el.text}</p>
                </Link>
              </div>
            );
          }).reverse()}
        </Carousel>
      )}

      <h2 className={styles.map_title}>Мы на карте</h2>
      <div className={styles.map}>
        {current < 992 ? (
          <iframe
            title="This is a unique title"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac37889cc469538877b1390e0011720c1867570159c92c8aeecb0848cb3f7496b&amp;source=constructor"
            width="300"
            height="300"
          ></iframe>
        ) : (
          <iframe
            title="This is a unique title"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac37889cc469538877b1390e0011720c1867570159c92c8aeecb0848cb3f7496b&amp;source=constructor"
            width="900"
            height="720"
          ></iframe>
        )}
      </div>
    </div>
  );
}
