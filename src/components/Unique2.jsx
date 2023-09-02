import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Real, Remote } from "./Icons";
import blur1 from "../assets/images/png/blur_circle.png";

const Unique2 = () => {
  return (
    <div className="px-3">
      <div id="my_scroll">
        <Container className="unique_section px-5 py-3 pt-md-5  mt-md-5 overflow-scroll position-relative ">
          {/* <img
            className="w-100 position-absolute home_blur2"
            src={blur1}
            alt="blur1"
          />
          <img
            className="w-100 position-absolute home_blur3"
            src={blur1}
            alt="blur1"
          /> */}
          <h2
            data-aos="fade-left"
            data-aos-duration="2000"
            className="ff-secondary fs_40 fw-bold fc_white text-center mb-3"
          >
            Unique features
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="ff-primary fs_16 fw-normal fc_white text-center mx-auto mb-3 unique_para1"
          >
            ability to engage in natural, fluent conversations in over 15
            languages,
          </p>
          <div className="">
            <div className="py-3 py-md-0">
              <div  className="unique_card  mt-3 mt-md-5 ">
                <Remote />
                <h2 className="ff-secondary fs_20 fw-bold fc_dark_black mt-4">
                  Remote Access and File Management
                </h2>
                <p className="ff-primary fs_16 fw-normal fc_dark_black unique_para2">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-end transform_10p py-3 py-md-0">
              <div  className="unique_card  mt-3 mt-md-5 ">
                <Real />
                <h2 className="ff-secondary fs_20 fw-bold fc_dark_black mt-4 ">
                  Real-time Home Monitoring
                </h2>
                <p className="ff-primary fs_16 fw-normal fc_dark_black unique_para2">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
            <div className=" transform_10p1 py-3 py-md-0">
              <div  className="unique_card  mt-3 mt-md-5 ">
                <Remote />
                <h2 className="ff-secondary fs_20 fw-bold fc_dark_black mt-4">
                  Remote Access and File Management
                </h2>
                <p className="ff-primary fs_16 fw-normal fc_dark_black unique_para2">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-end transform_10p2 py-3 py-md-0">
              <div  className="unique_card  mt-3 mt-md-5 ">
                <Real />
                <h2 className="ff-secondary fs_20 fw-bold fc_dark_black mt-4 ">
                  Real-time Home Monitoring
                </h2>
                <p className="ff-primary fs_16 fw-normal fc_dark_black unique_para2">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Unique2;
