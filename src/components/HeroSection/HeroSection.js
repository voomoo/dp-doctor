import React from "react";
import { Button, Container } from "react-bootstrap";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero__section">
      <Container style={{ position: "relative" }}>
        <div className="section__body">
          <div className="hero__text my-auto">
            <h2 className="text__heading">
              Protect and Take Care of Your Health
            </h2>
            <p className="text__desc" style={{ maxWidth: "500px" }}>
              Download Our App and feel free to take your Health Advice from a
              Specialist.
            </p>
            <Button className="hero__btn">Search for a Service</Button>
            <div className="download__btns">
              <a
                href="https://www.google.com/"
                className="download__btn1"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/images/play_store 1.png" alt="" />
              </a>
              <a
                href="https://www.google.com/"
                className="download__btn2"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/images/apple 1.png" alt="" />
              </a>
            </div>
          </div>
          <div className="image__part">
            <img
              src="./assets/images/Frame.png"
              alt="side pic"
              style={{ maxWidth: "425px" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
