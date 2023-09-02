import React from 'react'
import Slider2 from "react-slick";
import blur1 from "../assets/images/png/blur_circle.png";
import right_half from "../assets/images/png/right_half.png"
import left_half from "../assets/images/png/left_half.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import block1 from "../assets/images/webp/block_card1.webp"
import block2 from "../assets/images/webp/block_card2.webp"
import block3 from "../assets/images/webp/block_card3.webp"
import block4 from "../assets/images/webp/block_card4.webp"
import { Container } from 'react-bootstrap'

const BlockChain3 = () => {

 var settings = {
   dots: true,
   infinite: true,
   speed: 3000,
   autoplay: true,
   cssEase: "linear",
   autoplaySpeed: 0,
   slidesToShow: 4,
   slidesToScroll: 1,
   pauseOnHover:false,
   arrows: false,
   responsive: [
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
         slidesToScroll:1
       }
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 1,
         slidesToScroll:1
       }
     }
   ]
 };
 
  return (
    <div className="py-3 py-md-5 position-relative">
      <img
        className=" position-absolute right_half"
        src={left_half}
        alt="left_half"
      />
      <img
        className=" position-absolute left_half"
        src={right_half}
        alt="right_half"
      />
      <img
        className="w-100 position-absolute home_blur4"
        src={blur1}
        alt="blur1"
      />
      <img
        className="w-50  position-absolute home_blur5"
        src={blur1}
        alt="blur1"
      />
      <Container>
        <h2 data-aos="fade-left"
            data-aos-duration="2000" className="ff-secondary fs_40 fc_green fw-bold mb-3 text-center">
          Blockchain & AI technology
        </h2>
        <p data-aos="fade-right"
            data-aos-duration="2000" className="ff-primary fs_16 fw-normal fc_white block_para1 text-center mx-auto pb-5 opacity_07">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p data-aos="fade-left"
            data-aos-duration="2000" className="ff-secondary fs_20 fw-bold fc_white block_para2 text-center mx-auto py-5">
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
      </Container>
      <Container>
        {/* <div className="block_card">
          <div className="one_circle d-flex align-items-center justify-content-center mx-auto">
            <h2 className="ff-secondary fs_32 fw-700 fc_white ">1</h2>
          </div>
          <h2 className="ff-secondary fs_20 fw-700 fc_white block_para1">
            Security and Privacy
          </h2>
        </div> */}
        <Slider2
          data-aos="fade-up"
          data-aos-duration="2000"
          {...settings}
          className="pb-md-5 "
        >
          <div className="block_hover">
            <img className="w-100" src={block1} alt="block1" />
          </div>
          <div className="block_hover">
            <img className="w-100 pt-5" src={block2} alt="block2" />
          </div>
          <div className="block_hover">
            <img className="w-100" src={block3} alt="block3" />
          </div>
          <div className="block_hover">
            <img className="w-100 pt-5" src={block4} alt="block4" />
          </div>
          <div className="block_hover">
            <img className="w-100" src={block1} alt="block1" />
          </div>
          <div className="block_hover">
            <img className="w-100 pt-5" src={block2} alt="block2" />
          </div>
        </Slider2>
      </Container>
    </div>
  );
}

export default BlockChain3
