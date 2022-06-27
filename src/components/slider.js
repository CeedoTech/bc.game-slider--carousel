import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      centerModer: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            autoplay: true,
            dots: true,
            arrows: false,
            autoplaySpeed: 1000,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div className="my-10 ml-10 mr-10">
        <Slider {...settings}>
          <div style={{ width: 300 }}>
            <img className="cursor-pointer " src="banner/1.png" alt="" />
          </div>
          <div>
            <img
              className="w-100% h-400  cursor-pointer "
              src="banner/lottery.webp"
              alt=""
            />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/2.png" alt="" />
          </div>
          <div>
            <img
              className="w-100% h-400  cursor-pointer "
              src="banner/3.png"
              alt=""
            />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/4.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/5.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/6.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/7.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/8.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/9.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/10.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/11.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/12.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/13.png" alt="" />
          </div>
          <div>
            <img className="cursor-pointer " src="banner/14.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
