import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer1">
        <div>
          <img src="./assets/images/Logo.png" alt="" />
          <p>
            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
            smod tempor incididunt ut labore et.
          </p>
        </div>
        <div>
          <ul className="footer__bullet">
            <li>Doctor</li>
            <li>Services</li>
            <li>Pharmacy Owner</li>
          </ul>
        </div>
        <div>
          <ul className="footer__bullet">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="footer__bullet">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
      </Container>
      <Container className="footer2 d-flex justify-content-between mt-4">
        <div className="contact">
          <h5>Contact Us</h5>
          <p>
            <span>
              <HiLocationMarker /> House-20, Road-27, Block-A, Banani, Dhaka.
            </span>
          </p>
          <p>
            <span>
              <IoIosCall /> +8801234567890, +88058269458
            </span>
          </p>
          <p>
            <span>
              <MdEmail /> tmbd@mail.com
            </span>
          </p>
          <p>
            <span>
              <BsGlobe /> tmbd.com
            </span>
          </p>
        </div>
        <div className="social__links">
          <h4>Social Links</h4>
          <a
            className="me-3"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            className="me-3"
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={15} />
          </a>
          <a
            className="me-3"
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={15} />
          </a>
          <a
            className="me-3"
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={15} />
          </a>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={15} />
          </a>
        </div>
        <div className="footer2">
          <h4>Download Our App</h4>
          <a
            className="mx-5"
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/images/play_store 1.png" alt="" />
          </a>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            <img src="./assets/images/apple 1.png" alt="" />
          </a>
        </div>
      </Container>
      <small className="d-flex justify-content-center">
        &copy; Copyright TM 2021. All rights reserved. Created by Golden
        Infotech.
      </small>
      <img
        className="footer__background"
        src="./assets/images/vector 9.png"
        alt=""
      />
    </div>
  );
};

export default Footer;
