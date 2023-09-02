import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Telegram, Twitter } from "./Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_bg">
      <Container className="py-3 pt-md-5">
        <Row className="d-flex justify-content-between align-items-center gap-3">
          <Col data-aos="fade-down" data-aos-duration="2000" md={4}>
            <p className="ff-secondary fs_16 fw-bold fc_white pb-3 footer_para1">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="d-flex gap-3 pt-1">
              <Link className="block_hover">
                <Facebook />
              </Link>
              <Link className="block_hover">
                <Twitter />
              </Link>
              <Link className="block_hover">
                <Telegram />
              </Link>
            </div>
          </Col>
          <Col
            data-aos="fade-down"
            data-aos-duration="2000"
            md={4}
            className="d-flex justify-content-between align-items-start gap-5"
          >
            <ul className="p-0 mb-0 d-flex flex-column gap-2">
              <li className="ff-secondary fs_18 fw-bold fc_white home">
                Quick links
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  Tokens
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  NexChat
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white home opacity_07 d-inline-block">
                  About
                </Link>
              </li>
            </ul>
            <ul className="p-0 mb-0 d-flex flex-column gap-2">
              <li className="ff-secondary fs_18 fw-bold fc_white home">
                Information's
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white opacity_07 d-inline-block home">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white opacity_07 d-inline-block home">
                  Phone
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white opacity_07 d-inline-block home">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white opacity_07 d-inline-block home">
                  terms
                </Link>
              </li>
              <li>
                <Link className="ff-secondary fs_16 fw-bold fc_white opacity_07 d-inline-block home">
                  Privacy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className="ff-secondary fs_16 fw-bold fc_white opacity_07 text-center pt-3 pt-md-5 footer_border"
        >
          @Copyright.nexai
        </h2>
      </Container>
    </div>
  );
};

export default Footer;
