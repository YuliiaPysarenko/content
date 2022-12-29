import React, { useContext } from "react";
import { ThemeContext } from '../../components/ThemeProvider/ThemeProvider';
import sprite from "../../assets/images/common-sprite.svg";
import styles from './BackgroundIcons.module.scss';
import classNames from 'classnames';

const getClassNames = (className) => classNames(styles.bgIcon, className);

export default function BackgroundIcons() {
  const [{theme}] = useContext(ThemeContext);
  return (
    <div style={{fill: theme.bgIcons}}>
    <svg className={getClassNames(styles.iconAmplifier)}>
      <use href={`${sprite}#icon-amplifier`}></use>
    </svg>
    <svg className={getClassNames(styles.iconDrum)}>
      <use href={`${sprite}#icon-drum`}></use>
    </svg>
    <svg className={getClassNames(styles.iconMicrophone)}>
      <use href={`${sprite}#icon-microphone`}></use>
    </svg>
    <svg className={getClassNames(styles.iconMixer)}>
      <use href={`${sprite}#icon-mixer`}></use>
    </svg>
    <svg className={getClassNames(styles.iconPiano)}>
      <use href={`${sprite}#icon-piano`}></use>
    </svg>
    <svg className={getClassNames(styles.iconRadio)}>
      <use href={`${sprite}#icon-radio`}></use>
    </svg>
    <svg className={getClassNames(styles.iconSpeaker)}>
      <use href={`${sprite}#icon-speaker`}></use>
    </svg>
    <svg className={getClassNames(styles.iconVinyl)}>
      <use href={`${sprite}#laptop`}></use>
    </svg>
    <div className={"cursor"} id={"cursor"}></div>
    </div>
  )
}

// bgIconAnimation()