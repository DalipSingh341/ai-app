import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import home1 from "../assets/images/webp/home_circle.webp"
import hand from "../assets/images/webp/home_hand.webp"
import blur1 from "../assets/images/png/blur_circle.png";
import {Link} from "react-router-dom"
const Circle1 = () => {
  return (
    <div className="pt-md-5">
      <Container className="py-3 py-md-5">
        <Row className="justify-content-between align-items-center position-relative">
          <img
            className="w-100 position-absolute home_blur2"
            src={blur1}
            alt="blur1"
          />
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center text-center position-relative"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-75"
              src={home1}
              alt="home1"
            />
            <img
              data-aos="fade-down"
              data-aos-duration="1500"
              className="w-50 position-absolute home_hand"
              src={hand}
              alt="hand"
            />
            <img
              className="w-100 position-absolute home_blur1"
              src={blur1}
              alt="blur1"
            />
          </Col>
          <Col
            
            lg={6}
            className="pt-5 mt-sm-5 pt-md-0"
          >
            <h2 data-aos="fade-left"
            data-aos-duration="2000" className="ff-secondary fc_green fs_40 fw-bold home_text1 mt-4 mt-lg-0">
              Ai-Powered Home Assistant
            </h2>
            <p data-aos="fade-left"
            data-aos-duration="2000" className="ff-primary fc_white fs_16 fw-normal  home_para1">
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p data-aos="fade-left"
            data-aos-duration="2000" className="ff-primary fc_white fs_16 fw-normal  home_para1">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p data-aos="fade-left"
            data-aos-duration="2000" className="ff-primary fc_white fs_16 fw-normal  home_para1">
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <Link  className="ff-secondary fs_18 fw-bold fc_dark_black hero_text1 d-inline-block knowmore_btn signup_btn">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Circle1

