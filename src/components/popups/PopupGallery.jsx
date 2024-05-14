import styles from "./PopupGallery.module.css";
import "react-multi-carousel/lib/styles.css";

export default function PopupGallery({ hide, currentImg }) {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.reviewWindow}>
        <button className={styles.reviewClose} onClick={hide}>
          X
        </button>
        <img className={styles.popup_img} src={currentImg} alt="" />
      </div>
    </div>
  );
}
