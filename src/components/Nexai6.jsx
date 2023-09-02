import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import nexai1 from "../assets/images/webp/Ai_circle.webp"

const Nexai6 = () => {
  return (
    <div className="py-3 py-md-5 ">
      <section className="nexai_section mx-auto">
        <Container className="py-3 py-md-5 ">
          <Row className="justify-content-center align-items-center">
            <Col lg={6}>
              <h2
                data-aos="fade-left"
                data-aos-duration="2000"
                className="ff-secondary fs_40 fw-bold fc_green mb-3"
              >
                What is NexAi?
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="ff-primary fs_16 fw-normal fc_white nexai_para1"
              >
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                className="ff-primary fs_16 fw-normal fc_white nexai_para1 pb-3"
              >
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <Link className="ff-secondary fs_18 fw-700 fc_dark_black signup_btn mt-md-4 mt-3 d-inline-block">
                Learn More
              </Link>
            </Col>
            <Col data-aos="fade-right" data-aos-duration="2000" lg={5}>
              <img className="w-100" src={nexai1} alt="nexai1" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Nexai6
