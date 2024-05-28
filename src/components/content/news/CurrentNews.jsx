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

  let render = (
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
          {select[0].img.map((item) => (
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
        <h5 className={styles.news_date}>{select[0].date}</h5>
        <p className={styles.news_text}>{select[0].text}</p>
      </div>
    </div>
  );

  switch (link) {
    case "19.01.2024":
      render = (
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
              {select[0].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[0].date}</h5>
            <p className={styles.news_text}>{select[0].text}</p>
          </div>
        </div>
      );
      break;

    case "24.01.2024":
      render = (
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
              {select[1].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[1].date}</h5>
            <p className={styles.news_text}>{select[1].text}</p>
          </div>
        </div>
      );
      break;

    case "03.02.2024":
      render = (
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
              {select[2].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[2].date}</h5>
            <p className={styles.news_text}>{select[2].text}</p>
          </div>
        </div>
      );
      break;

    case "16.02.2024":
      render = (
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
              {select[3].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[3].date}</h5>
            <p className={styles.news_text}>{select[3].text}</p>
          </div>
        </div>
      );
      break;

    case "29.02.2024":
      render = (
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
              {select[4].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[4].date}</h5>
            <p className={styles.news_text}>{select[4].text}</p>
          </div>
        </div>
      );
      break;

    case "02.03.2024":
      render = (
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
              {select[5].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[5].date}</h5>
            <p className={styles.news_text}>{select[5].text}</p>
          </div>
        </div>
      );
      break;

    case "02.03.2024.":
      render = (
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
              {select[6].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[6].date}</h5>
            <p className={styles.news_text}>{select[6].text}</p>
          </div>
        </div>
      );
      break;

    case "05.03.2024":
      render = (
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
              {select[7].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[7].date}</h5>
            <p className={styles.news_text}>{select[7].text}</p>
          </div>
        </div>
      );
      break;

    case "25.03.2024":
      render = (
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
              {select[8].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[8].date}</h5>
            <p className={styles.news_text}>{select[8].text}</p>
          </div>
        </div>
      );
      break;

    case "30.03.2024":
      render = (
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
              {select[9].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[9].date}</h5>
            <p className={styles.news_text}>{select[9].text}</p>
          </div>
        </div>
      );
      break;

    case "13.04.2024":
      render = (
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
              {select[10].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[10].date}</h5>
            <p className={styles.news_text}>{select[10].text}</p>
          </div>
        </div>
      );
      break;

    case "14.04.2024":
      render = (
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
              {select[11].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[11].date}</h5>
            <p className={styles.news_text}>{select[11].text}</p>
          </div>
        </div>
      );
      break;

    case "15.04.2024":
      render = (
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
              {select[12].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[12].date}</h5>
            <p className={styles.news_text}>{select[12].text}</p>
          </div>
        </div>
      );
      break;

    case "17.04.2024":
      render = (
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
              {select[13].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[13].date}</h5>
            <p className={styles.news_text}>{select[13].text}</p>
          </div>
        </div>
      );
      break;

    case "17.04.2024.":
      render = (
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
              {select[14].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[14].date}</h5>
            <p className={styles.news_text}>{select[14].text}</p>
          </div>
        </div>
      );
      break;

    case "18.04.2024":
      render = (
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
              {select[15].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[15].date}</h5>
            <p className={styles.news_text}>{select[15].text}</p>
          </div>
        </div>
      );
      break;

    case "22.04.2024":
      render = (
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
              {select[16].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[16].date}</h5>
            <p className={styles.news_text}>{select[16].text}</p>
          </div>
        </div>
      );
      break;

    case "28.04.2024":
      render = (
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
              {select[17].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[17].date}</h5>
            <p className={styles.news_text}>{select[17].text}</p>
          </div>
        </div>
      );
      break;
    
      case "10.05.2024":
      render = (
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
              {select[18].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[18].date}</h5>
            <p className={styles.news_text}>{select[18].text}</p>
          </div>
        </div>
      );
      break;
      
      case "10.05.2024.":
      render = (
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
              {select[19].img.map((item) => (
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
            <h5 className={styles.news_date}>{select[19].date}</h5>
            <p className={styles.news_text}>{select[19].text}</p>
          </div>
        </div>
      );
      break;

    default:
  }

  return <>{render}</>;
}
