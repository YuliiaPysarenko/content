import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import styles from "./Navigation.module.scss";
import { ThemeContext, getThemeProps } from '../../components/ThemeProvider';
import { changeBgColor } from '../../redux/theme/themeSlice';

export default function Navigation () {
  const [{theme}] = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  let location = useLocation();
  const pathname = location.pathname;

  const activeLinkItem = classnames(styles.menuItem, styles.activeLink);
  const nonActiveLinkItem = classnames(styles.menuItem);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuClasses = classnames(styles.cross, styles.menuOne);
  const closeMenuClasses = classnames(styles.checked, styles.menuOne);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const openMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    dispatch(changeBgColor(pathname));
    setIsMenuOpen(false);
  }, [dispatch, pathname])
  
  return (
    <>
      <button onClick={(e) => openMenu(e)} className={isMenuOpen ? openMenuClasses : closeMenuClasses}>
        <label className={styles.navLabel}>
          <input className={styles.navInput} type="checkbox" />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={styles.navMenuIcon}>
            <path className={styles.lineOne} d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className={styles.lineTwo} d="M0 50h70" />
            <path className={styles.lineThree} d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </button>
      <nav className={styles.navigation}>
        <NavLink className={({ isActive }) => (isActive ? activeLinkItem : nonActiveLinkItem)} to={'/'} onClick={() => setIsMenuOpen(false)} style={getThemeProps(theme, "color")}>{t('About')}</NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeLinkItem : nonActiveLinkItem)} to={'/portfolio'} onClick={() => setIsMenuOpen(false)} style={getThemeProps(theme, "color")}>{t('Portfolio')}</NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeLinkItem : nonActiveLinkItem)} to={'/contacts'} onClick={() => setIsMenuOpen(false)} style={getThemeProps(theme, "color")}>{t('Contacts')}</NavLink>
      </nav>

      <div className={styles.langBtnContainer}>
        <button className={styles.lang} onClick={() => changeLanguage(i18n.language === 'en' ? 'uk' : 'en')}>{i18n.language === 'en' ? 'UA' : 'EN'}</button>
    </div>
    </>
  )
}