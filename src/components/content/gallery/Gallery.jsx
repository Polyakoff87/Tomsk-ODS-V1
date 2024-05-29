import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { useSelector } from "react-redux";
import PopupGallery from "../../popups/PopupGallery";
import { useEffect } from "react";

export default function Gallery() {
  const select = useSelector((state) => state.gallery);
  const [isActive, setIsActive] = useState("2016");
  const [isVisible, setIsVisible] = useState({ display: "none" });
  const [isPopup, setIsPopup] = useState(false);
  const [currentYear, setCurrentYear] = useState(select.img2016);
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    if (isPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  function toggle(e) {
    setIsActive(e.target.innerHTML);
    if (e.target.innerHTML === "2016") {
      setCurrentYear(select.img2016);
    } else if (e.target.innerHTML === "2017") {
      setCurrentYear(select.img2017);
    } else if (e.target.innerHTML === "2018") {
      setCurrentYear(select.img2018);
    } else if (e.target.innerHTML === "2019") {
      setCurrentYear(select.img2019);
    } else if (e.target.innerHTML === "2020") {
      setCurrentYear(select.img2020);
    } else if (e.target.innerHTML === "2021") {
      setCurrentYear(select.img2021);
    } else if (e.target.innerHTML === "2022") {
      setCurrentYear(select.img2022);
    } else if (e.target.innerHTML === "2023") {
      setCurrentYear(select.img2023);
    } else if (e.target.innerHTML === "2024") {
      setCurrentYear(select.img2024);
    }
  }

  function hide() {
    let current = { ...isVisible, display: "none" };
    setIsVisible(current);
    setIsPopup(false);
  }

  function show(e) {
    setCurrentImg(e.target.src);
    let current = { ...isVisible, display: "block" };
    setIsVisible(current);
    setIsPopup(true);
    console.log(e.target.src);
  }

  function render(i) {
    return (
      <div className={styles.gallery_wrapper_fotos}>
        <h2>{i}</h2>
        <div className={styles.gallery_fotos}>
          {currentYear.map((item) => (
            <div key={item.id} className={styles.gallery_item}>
              <img
                onClick={(e) => show(e)}
                className={styles.gallery_img}
                key={item.id}
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  let res;

  switch (isActive) {
    case "2016":
      res = render("2016");
      break;

    case "2017":
      res = render("2017");
      break;

    case "2018":
      res = render("2018");
      break;

    case "2019":
      res = render("2019");
      break;

    case "2020":
      res = render("2020");
      break;

    case "2021":
      res = render("2021");
      break;

    case "2022":
      res = render("2022");
      break;

    case "2023":
      res = render("2023");
      break;

    case "2024":
      res = render("2024");
      break;

    default:
      res = render("2016");
  }

  // console.log(JSON.stringify(select.img2016));
  return (
    <div className={styles.gallery_wrapper}>
      <h1>Галерея</h1>
      <div className={styles.selector}>
        <Button text={"2016"} toggle={toggle} isActive={isActive} />
        <Button text={"2017"} toggle={toggle} isActive={isActive} />
        <Button text={"2018"} toggle={toggle} isActive={isActive} />
        <Button text={"2019"} toggle={toggle} isActive={isActive} />
        <Button text={"2020"} toggle={toggle} isActive={isActive} />
        <Button text={"2021"} toggle={toggle} isActive={isActive} />
        <Button text={"2022"} toggle={toggle} isActive={isActive} />
        <Button text={"2023"} toggle={toggle} isActive={isActive} />
        <Button text={"2024"} toggle={toggle} isActive={isActive} />
      </div>

      {res}
      <div style={isVisible}>
        <PopupGallery
          currentYear={currentYear}
          hide={hide}
          currentImg={currentImg}
        />
      </div>
    </div>
  );
}

function Button({ text, isActive, toggle }) {
  return (
    <div>
      {isActive === text ? (
        <button onClick={(e) => toggle(e)} className={`${styles.activeBtn} `}>
          {text}
        </button>
      ) : (
        <button
          onClick={(e) => toggle(e)}
          className={`${styles.selector_btn} `}
        >
          {text}
        </button>
      )}
    </div>
  );
}
