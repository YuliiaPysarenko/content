import sprite from "../../assets/images/common-sprite.svg";
import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <svg className={styles.loaderIcon}>
        <use href={`${sprite}#laptop-color`}></use>
      </svg>
    </div>
  )
}