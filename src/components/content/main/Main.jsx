import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { Carousel, ConfigProvider, Image } from "antd";
import { useGetNewsQuery } from "../../../api/rtkApi";

export default function Main() {

  const { data } = useGetNewsQuery();


  const item = {
    background: "rgba(256, 256, 256, 0.8)",
    margin: "20px 40px",
  };

  const link = {
    color: "white",
  };

  const img_wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const news_text = {
    margin: "15px",
    textAlign: "justify",
    textIndent: "15px",
    fontSize: "1.0em",
  };

  const date = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 40,
            dotHeight: 10,
            dotOffset: -15,
          },
          Image: {},
        },
      }}
    >
      <div className={styles.main_wrapper}>
        <h2 className={styles.news_title}>Наши Новости</h2>
        <div className={styles.carouselWrapper}>
        <Carousel draggable arrows adaptiveHeight autoplay autoplaySpeed={10000}>
          {data?.map((el) => {
              return (
                <div key={el.id} style={item}>
                  <div style={img_wrapper}>
                    <Image
                      alt=""
                      src={el.url}
                      height={600}
                    ></Image>
                  </div>
                  <h5 style={date}>{el.date}</h5>
                  <Link style={link} to={`/news/${el.date}`}>
                    <p style={news_text}>{el.text}</p>
                  </Link>
                </div>
              );
            })
            .reverse()}
        </Carousel>
        </div>

        <h2 className={styles.map_title}>Мы на карте</h2>
        <div className={styles.mapWrapper}>
          <iframe
            title="This is a unique title"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac37889cc469538877b1390e0011720c1867570159c92c8aeecb0848cb3f7496b&amp;source=constructor"
            width="1000"
            height="600"
          ></iframe>
        </div>
      </div>
    </ConfigProvider>
  );
}
