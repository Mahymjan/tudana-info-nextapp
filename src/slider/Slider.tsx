import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderProp = {
  data? : Array<ReactNode>
}

const SimpleSlider = ({data}: SliderProp) => {
  // const {data} = props
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <div>next</div>,
    // prevArrow: <div>prev</div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2,
        }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1.7,
              slidesToScroll: 1,
            }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]

  };

  return (
    <Slider {...settings} autoplay={true} autoplaySpeed={5000}>
      {
        data?.map((item, index) => (
          <div key={index}>{item}</div>
        ))
      }
    </Slider>
  )
}

export {SimpleSlider}


