import { useTranslation } from 'react-i18next';
import sprite from "../../assets/images/common-sprite.svg";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className={styles.contactsContainer}>
      <p className={styles.contactsText}>{t('Feel free to contact me')}</p>
      <ul>
        <li className={styles.contactsListItem}>
          <a href="mailto:yuliapysarenko@gmail.com" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-mail`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.contactsListItem}>
          <a href="https://www.facebook.com/yulia.pysarenko/" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.contactsListItem}>
          <a href="https://www.instagram.com/makarivska_divka/" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.contactsListItem}>
          <a href="https://www.linkedin.com/in/yuliia-pysarenko/" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-linkedin`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.contactsListItem}>
          <a href="https://t.me/Makarivska_Divka" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-telegram`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.contactsListItem}>
          <a href="https://github.com/YuliiaPysarenko/" className={styles.contactsLink} target="_blank" rel="noreferrer">
            <svg className={styles.contactsIcon}>
              <use href={`${sprite}#icon-github`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}