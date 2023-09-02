import React from 'react'
import { Container } from 'react-bootstrap'
import Slider3 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blur1 from "../assets/images/png/blur_circle.png";

const Nexai5 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    rtl:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className="position-relative">
      <img
        className="w-50 position-absolute home_blur6"
        src={blur1}
        alt="blur1"
      />
      <Container className="py-3 py-md-5">
        <h2
          data-aos="fade-left"
          data-aos-duration="2000"
          className="ff-secondary fs_40 fw-bold fc_green text-center mb-2"
        >
          NexAi does all this. And more.
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="ff-primary fs_16 fw-normal fc_white opacity_07 nexa_para1 mx-auto text-center"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
      </Container>
      <Slider3 {...settings}>
        <div className="ps-4">
          <div className="nexa_card my-3  ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on light
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, set alarm of 5:00 am
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on music
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
      </Slider3>
      <Slider3 dir="rtl" {...settings2} className="py-2">
        <div className="ps-4">
          <div className="nexa_card my-3  ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on light
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, set alarm of 5:00 am
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on music
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
      </Slider3>
      <Slider3 {...settings}>
        <div className="ps-4">
          <div className="nexa_card my-3  ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on light
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, set alarm of 5:00 am
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, Turn on music
            </h2>
          </div>
        </div>
        <div className="ps-4">
          <div className="nexa_card my-3 ">
            <h2 className="ff-secondary fs_24 fw-bold fc_white text-center mx-auto nexa_text1">
              NexAi, measure this table
            </h2>
          </div>
        </div>
      </Slider3>
    </div>
  );
}

export default Nexai5
