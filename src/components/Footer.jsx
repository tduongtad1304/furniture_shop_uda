import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Household_logo.png";
import sponsors1 from "../assets/images/sponsors.png";
import sponsors2 from "../assets/images/fedex_logo.png";
import sponsors3 from "../assets/images/uber.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={3} mdCol={1} smCol={1} gap={30}>
          <div>
            <div className="footer__title">About us</div>
            <p className="footer__logo">
              <Link to="/">
                <img src={logo} alt="#" style={{ width: "55%" }} />
              </Link>
            </p>
            <p className="footer__content">
              A Household Worker falls under the broader career category of
              Maids and Housekeeping Cleaners.
            </p>
          </div>

          <div>
            <div className="footer__title">CONTACT US</div>
            <div className="footer__content" style={{ marginBottom: "2rem" }}>
              <p className="footer__content__info">
                <i class="bx bx-map"></i>
                <span>13 Ward, Arizona Street, Ward City, USA</span>
              </p>
              <a className="footer__content__info" href="...">
                <i class="bx bx-phone"></i>
                <span>+1-234-56789</span>
              </a>
              <a
                className="footer__content__info"
                href="mailto:Abc123@donga.edu.vn"
              >
                <i class="bx bx-mail-send"></i>
                <span>tadwilson@gmail.com</span>
              </a>

              <p className="footer__content__info">
                <i class="bx bx-time-five"></i>
                <span>Open Monday to Friday 7AM - 09PM: GMT-1</span>
              </p>
            </div>

            <div className="footer__icon__info">
              <div className="icon_facebook">
                <a href="https://www.facebook.com/">
                  <button>
                    <i class="bx bxl-facebook-circle"></i>
                  </button>
                </a>
              </div>
              <a href="https://www.twitter.com/">
                <button>
                  <i class="bx bxl-twitter"></i>
                </button>
              </a>
              <a href="https://www.instagram.com/">
                <button>
                  <i class="bx bxl-instagram"></i>
                </button>
              </a>
              <a href="https://www.youtube.com/">
                <button>
                  <i class="bx bxl-youtube"></i>
                </button>
              </a>
            </div>
          </div>

          <div>
            <div className="footer__title">Sponsors</div>
            <div className="footer__content"></div>
            <p className="footer____sponsor__logo">
              <Link to="/">
                <img src={sponsors1} alt="#" style={{ width: "27%" }} />
              </Link>
              <Link to="/">
                <img
                  src={sponsors2}
                  alt="#"
                  style={{
                    width: "40%",
                    marginLeft: "1.3rem",
                    marginBottom: "1.2rem",
                  }}
                />
              </Link>
              <Link to="/">
                <img
                  src={sponsors3}
                  alt="#"
                  style={{
                    width: "20%",
                    marginLeft: "1.9rem",
                    marginBottom: "1.2rem",
                  }}
                />
              </Link>
            </p>
            <p className="footer__content">
              Sponsors for the branches of Future House since 2019.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
