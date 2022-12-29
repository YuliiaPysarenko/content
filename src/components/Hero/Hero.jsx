import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Hero.module.scss";

export default function Hero () {
  const { t } = useTranslation();

  return (
  <div className={styles.hero}>
    <div className={styles.heroContainer}>
      <h2>{t('Hello')}</h2>
      <h3>{t('Who I am')}</h3>
    </div>
  </div>
  )
}