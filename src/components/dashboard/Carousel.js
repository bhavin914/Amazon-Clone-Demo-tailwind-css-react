import React from "react";
import { advertizement, dash5, dash6, prod_1 } from "../../assets/images/index";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        <div>
          <img src={advertizement} alt="HeadLine" />
        </div>
        <div>
          <img src={prod_1} alt="HeadLine" />
        </div>
        <div>
          <img src={dash5} alt="HeadLine" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
