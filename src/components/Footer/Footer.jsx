import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import sprite from "../../assets/images/common-sprite.svg";
import { ThemeContext, getThemeProps } from '../ThemeProvider';

export default function Footer () {
  const [{theme}] = useContext(ThemeContext);
  return (
  <footer className={styles.footer} style={getThemeProps(theme, "fill")}>
    <div className={styles.footerContainer}>
      <div className={styles.mailBlock}>
        <a href="mailto:yuliapysarenko@gmail.com" className={styles.contactsLink} target="_blank" rel="noreferrer">
          <svg className={styles.contactsIcon}>
            <use href={`${sprite}#icon-mail`}></use>
          </svg>
          yuliapysarenko@gmail.com
        </a>
      </div>
    </div>
  </footer>
  )
}