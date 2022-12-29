import React from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

export default function Container({ children, className }) {
  const classes = classNames(styles.Container, className);
  return <div className={classes}>{children}</div>;
}
