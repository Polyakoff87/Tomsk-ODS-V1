import React from "react";
import styles from "./Footer.module.css";
import VK_png from "../../pictures/vk.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_item}>
        {" "}
        ТРОО "Общество доступная среда".
        <br></br>634045 г. Томск, ул. Нахимова, 13/Б, кв. 22
      </div>
      <div className={styles.footer_item}>tomskods@mail.ru</div>
      <div className={styles.footer_item}>Тел. + 7 913 801 72 53</div>
      <div className={styles.footer_item}>
        <div className={styles.vk}>
          <a
            href="https://vk.com/club114410857"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.vk_img} src={VK_png} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
