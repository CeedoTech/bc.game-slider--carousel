import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
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
          },
        },
      ],
    };
    return (
      <div className="my-10 ml-10 mr-10">
        <Slider {...settings}>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/14.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100% h-400  cursor-pointer rounded-3xl"
              src="banner/lottery.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100% h-400  cursor-pointer rounded-3xl"
              src="banner/3.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/4.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/5.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/6.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/7.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/8.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/9.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/10.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/11.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/12.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/13.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="cursor-pointer rounded-3xl"
              src="banner/14.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
