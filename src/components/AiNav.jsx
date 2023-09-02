import React, { useState } from 'react'
import logo from "../assets/images/png/logo.png"
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
const AiNav = () => {
  const [nav, setNav] = useState(true)

    function shownav() {
        setNav(false);
        document.body.classList.add("overflow-hidden")    
    } function hidenav() {
        setNav(true);
        document.body.classList.remove("overflow-hidden")
    }

  return (
    <div className="bgc_blue  pt-3">
      <div className="bg_image">
        <Container className="py-2 py-md-2 ">
          <div className="d-flex align-items-center justify-content-between">
            <img src={logo} alt="logo" />
            <ul
              className={`${
                nav
                  ? "d-flex nav_bar mb-0 p-0 align-items-center gap-4"
                  : "ps-0 d-flex nav_bar align-items-center show mb-0 gap-4"
              }`}
            >
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fc_white fs_16 fw-normal d-inline-block home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fc_white fs_16 fw-normal d-inline-block home"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fc_white fs_16 fw-normal d-inline-block home"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fc_white fs_16 fw-normal d-inline-block home"
                >
                  NexChat
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNav(true)}
                  className="ff-primary fc_white fs_16 fw-normal d-inline-block home "
                >
                  Tokens
                </Link>
              </li>
              <li className="d-md-none">
                <Link
                  onClick={() => setNav(true)}
                  className="ff-secondary fc_dark_black fs_18 fw-bold d-inline-block signup_btn"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <Link
              onClick={() => setNav(true)}
              className="ff-secondary fc_dark_black fs_18 fw-bold d-inline-block signup_btn d-none d-md-block"
            >
              Sign Up
            </Link>
            <Button
              className="position-relative z-3 d-lg-none cross_btn"
              onClick={nav ? shownav : hidenav}
            >
              {" "}
              {nav ? (
                <Icon icon={menu} size={50} />
              ) : (
                <Icon icon={x} size={50} />
              )}
            </Button>
          </div>
        </Container>
        <Container className="py-2 py-md-5">
          <h2
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="3500"
            className="ff-secondary fs_60 fw-bold fc_white hero_text1 mb-3"
          >
            <span className="fc_green">Nexai</span> is an advanced AI-powered
            home assistant
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="ff-primary fs_16 fw-normal fc_white hero_para1"
          >
            Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
            odio.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-duration="2000"
            className="ff-secondary fs_18 fw-bold fc_dark_black hero_text1 d-inline-block knowmore_btn signup_btn"
          >
            Know More
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default AiNav;
