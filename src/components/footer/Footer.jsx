import React from "react";
import style from "./Footer.module.css";
import VK_png from "../../pictures/vk.png";
import useResponsiveWidth from "../../hooks/useResponsiveWidth";

export default function Footer() {
  const { width } = useResponsiveWidth();
  const styles = {
    container: {
      width: `${width}`,
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "rgba(36, 70, 38, 0.9)",
      color: "white",
      fontFamily: "Arial, Helvetica, sans-serif",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0px 15% 0px 15%",
      height: "120px",
    },
  };

  return (
    <div style={styles.container}><p className={style.p}> ТРОО "Общество доступная среда".</p>
     
      <p className={style.p}>634045 г. Томск, ул. Нахимова, 13/Б, кв. 22</p>
      <div><p className={style.p}>tomskods@mail.ru</p></div>
      <div><p className={style.p}>Тел. + 7 913 801 72 53</p></div>
      <div>
        <div>
          <a
            href="https://vk.com/club114410857"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.vk_img} src={VK_png} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
