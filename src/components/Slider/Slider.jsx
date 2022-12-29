import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";

import banner1 from "../../assets/images/bugs-and-bunny-banner1-16x9.jpg";
import banner2 from "../../assets/images/bugs-and-bunny-banner2-16x9.jpg";
import banner3 from "../../assets/images/bugs-and-bunny-banner3-16x9.jpg";

export default function SimpleSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 320,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <Slider className={styles.slider} {...settings}>
      <div>
        <img src={banner2} alt={"banner 2"} />
      </div>
      <div>
        <img src={banner3} alt={"banner 3"} />
      </div>
      <div>
        <img src={banner1} alt={"banner 1"} />
      </div>
    </Slider>
  );
}