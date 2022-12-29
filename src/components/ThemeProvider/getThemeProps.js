export default function getThemeProps(theme, ...props) {
  let propsObj = {
    transitionDuration: "2000ms",
  };

  const themeKeys = Object.keys(theme);
  const themeEntries = Object.entries(theme);

  for (let index = 0; index < themeKeys.length; index++) {
    const element = themeKeys[index];

    props.forEach((prop) => {
      if (prop === element) {
        return (propsObj[`${prop}`] = themeEntries[index][1]);
      }
    });
  }

  return propsObj;
}
