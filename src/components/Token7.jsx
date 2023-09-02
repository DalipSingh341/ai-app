import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import token1 from "../assets/images/webp/token_hand.webp";
import blur1 from "../assets/images/png/blur_circle.png";
import right_half from "../assets/images/png/right_half.png";


const Token7 = () => {
  return (
    <div className="py-3 py-md-5 position-relative">
      <img
        className="w-50  position-absolute home_blur7"
        src={blur1}
        alt="blur1"
      />
      <img
        className="w-50  position-absolute home_blur8"
        src={blur1}
        alt="blur1"
      />
      <img
        className=" position-absolute left_half2"
        src={right_half}
        alt="right_half"
      />
      <Container>
        <h2
          data-aos="fade-left"
          data-aos-duration="2000"
          className="ff-secondary fs-40 fw-bold fc_green text-center"
        >
          NexAI Token & utility
        </h2>
        <Row className="py-3 py-md-5 d-flex justify-content-between">
          <Col data-aos="fade-right" data-aos-duration="2000" lg={5}>
            <img className="w-100" src={token1} alt="token1" />
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-duration="2000"
            id="my_scroll2"
            lg={6}
            className="position-relative "
          >
            <div className="Tokens_boxScroll   position-relative overflow-scroll">
              <div className="Left_line position-relative">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Purchasing Nexai Products
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI tokens will be the primary currency for acquiring
                    Nexai's extensive range of software solutions, hardware
                    devices, including drones and sensors, and other smart home
                    products available on the Nexai marketplace. Users can
                    confidently make purchases using Nex tokens, enjoying the
                    convenience and flexibility of a token-based payment system.
                  </p>
                </div>
              </div>
              <div className="  Left_line position-relative mt-5 pt-xl-4">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Accessing Exclusive Content
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    By holding Nex AI tokens, users will gain privileged access
                    to exclusive content within the Nexai platform. These tokens
                    will unlock premium features, advanced functionalities, and
                    specialized services, enabling users to fully explore and
                    enjoy the enhanced capabilities of Nexai's ecosystem.
                  </p>
                </div>
              </div>
              <div className=" Left_line position-relative mt-5 pt-xl-4">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className=" ff-secondary fs_24 fw-bold fc_white mb-3">
                    Loyalty and Rewards
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    The Nexai ecosystem will feature a robust loyalty program,
                    rewarding users with Nex AI tokens for their active
                    engagement, ongoing participation, and dedicated usage of
                    Nexai's products and services. Token holders will have the
                    opportunity to redeem their accumulated rewards for
                    discounts, incentives, or exclusive offers, fostering a
                    strong sense of loyalty and encouraging continued
                    involvement.
                  </p>
                </div>
              </div>
              <div className="  Left_line position-relative mt-5 pt-xl-4">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className=" ff-secondary fs_24 fw-bold fc_white mb-3">
                    Participating in Governance
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI token holders will play a vital role in the
                    governance of the Nexai ecosystem. Through voting
                    mechanisms, token holders will have a direct say in the
                    decision-making process. They can express their opinions,
                    vote on proposed changes or improvements, and actively
                    contribute to shaping the future development and direction
                    of the Nexai ecosystem.
                  </p>
                </div>
              </div>
              <div className="  Left_line position-relative mt-5 pt-xl-4">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className=" ff-secondary fs_24 fw-bold fc_white mb-3">
                    Peer-to-Peer Transactions
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI tokens will enable seamless peer-to-peer transactions
                    within the Nexai community. Users will have the ability to
                    exchange tokens with others for various purposes, such as
                    purchasing pre-owned Nexai devices, engaging in token
                    trading activities, or conducting value exchanges directly
                    within the ecosystem, all with the utmost security and
                    convenience.
                  </p>
                </div>
              </div>
              <div className="  Left_line_last position-relative mt-5 pt-xl-4">
                <div className="ps-5 ms-sm-5 cricel_left position-relative">
                  <h2 className=" ff-secondary fs_24 fw-bold fc_white mb-3">
                    Token Staking and Rewards
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI tokens will support staking mechanisms, allowing
                    users to lock up their tokens for a specified period. By
                    staking their tokens, users will earn additional rewards,
                    such as interest, dividends, or other incentives, further
                    incentivizing token holding and fostering long-term
                    engagement and loyalty.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="">
              <div className="timeline1 ">
                <div className="token_circle position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Purchasing Nexai Products
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI tokens will be the primary currency for acquiring
                    Nexai's extensive range of software solutions, hardware
                    devices, including drones and sensors, and other smart home
                    products available on the Nexai marketplace. Users can
                    confidently make purchases using Nex tokens, enjoying the
                    convenience and flexibility of a token-based payment system.
                  </p>
                </div>
                <div className="token_circle position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Accessing Exclusive Content
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    By holding Nex AI tokens, users will gain privileged access
                    to exclusive content within the Nexai platform. These tokens
                    will unlock premium features, advanced functionalities, and
                    specialized services, enabling users to fully explore and
                    enjoy the enhanced capabilities of Nexai's ecosystem.
                  </p>
                </div>
                <div className="token_circle position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Loyalty and Rewards
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    The Nexai ecosystem will feature a robust loyalty program,
                    rewarding users with Nex AI tokens for their active
                    engagement, ongoing participation, and dedicated usage of
                    Nexai's products and services. Token holders will have the
                    opportunity to redeem their accumulated rewards for
                    discounts, incentives, or exclusive offers, fostering a
                    strong sense of loyalty and encouraging continued
                    involvement.
                  </p>
                </div>
                <div className="token_circle position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Participating in Governance
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI token holders will play a vital role in the
                    governance of the Nexai ecosystem. Through voting
                    mechanisms, token holders will have a direct say in the
                    decision-making process. They can express their opinions,
                    vote on proposed changes or improvements, and actively
                    contribute to shaping the future development and direction
                    of the Nexai ecosystem.
                  </p>
                </div>
                <div className="token_circle position-relative">
                  <h2 className="ff-secondary fs_24 fw-bold fc_white mb-3">
                    Peer-to-Peer Transactions
                  </h2>
                  <p className="ff-primary fs_16 fw-normal fc_white token_para1">
                    Nex AI tokens will enable seamless peer-to-peer transactions
                    within the Nexai community. Users will have the ability to
                    exchange tokens with others for various purposes, such as
                    purchasing pre-owned Nexai devices, engaging in token
                    trading activities, or conducting value exchanges directly
                    within the ecosystem, all with the utmost security and
                    convenience.
                  </p>
                </div>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Token7;
