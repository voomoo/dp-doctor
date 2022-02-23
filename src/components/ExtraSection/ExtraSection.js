import React from "react";
import { Button, Container } from "react-bootstrap";
import "./extraSection.css";
const ExtraSection = ({
  title,
  subtitle,
  paragraphHeading,
  paragraph,
  image,
  buttonTitle,
  buttonAction,
  reverse = false,
}) => {
  return (
    <div className="extra__section" id="about-us">
      <Container style={{ position: "relative" }}>
        <h3 className="section__title text-center mt-5">{title}</h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          {subtitle}
        </h6>
        <div
          className="section__body"
          style={{
            flexDirection: reverse ? "row-reverse" : "row",
          }}
        >
          <div className="textual__part">
            <h4 className="text__heading">{paragraphHeading}</h4>
            <p className="text__desc" style={{ maxWidth: "500px" }}>
              {paragraph}
            </p>
            <Button onClick={buttonAction}>{buttonTitle}</Button>
          </div>
          <div className="image__part">
            <img src={image} alt="side pic" style={{ maxWidth: "425px" }} />
          </div>
        </div>
        <img
          className="extra__img"
          src="./assets/images/Vector 6.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "-100px",
            right: reverse ? "900px" : "-98px",
            zIndex: "-1",
            transform: reverse ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </Container>
    </div>
  );
};

export default ExtraSection;
