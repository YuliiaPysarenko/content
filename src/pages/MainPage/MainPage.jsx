import React from "react";
import Container from '../../components/Container/Container';
import { useTranslation } from 'react-i18next';
import History from "../../components/History/History";
import styles from './MainPage.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainPage() {
  const { t } = useTranslation();
  return (
  <Container className={styles.mainPage}>
    <Container className={styles.mainPageContainer}>
      <Container className={styles.mainPageTextContainer}>
        <Container className={styles.mainPageTextBlock}>
          <h2>{t('Hello')}</h2>
          <h3>{t('Who I am')}</h3>
        </Container>
      </Container>
    </Container>
        <History />

    {/* <Container className={styles.mainPageBgImageContainer} /> */}
  </Container>
  )
}