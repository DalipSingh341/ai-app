import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import blur1 from "../assets/images/png/blur_circle.png";
import right_half from "../assets/images/png/right_half.png";

const Ready8 = () => {
  return (
    <div className="position-relative">
      <img
        className="w-50 position-absolute home_blur9"
        src={blur1}
        alt="blur1"
      />
      <img
        className="w-50 position-absolute home_blur10"
        src={blur1}
        alt="blur1"
      />
      <img
        className=" position-absolute left_half3"
        src={right_half}
        alt="right_half"
      />
      <Container className="py-3 py-md-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="ff-secondary fs_40 fw-bold fc_white ready_para1"
          >
            Ready to get started{" "}
            <span className="fc_green">Talk to us Today</span>
          </h2>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="pt-md-0 pt-4"
          >
            <Link className="ff-secondary fs_18 fw-700 fc_dark_black signup_btn  d-inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ready8
