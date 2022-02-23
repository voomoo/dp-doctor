import React from "react";
import { Button, Container } from "react-bootstrap";
import "./serviceSection.css";

const ServiceSection = () => {
  return (
    <div className="service__section">
      <Container style={{ position: "relative" }}>
        <h3 className="section__title text-center mt-5">Our Services</h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div className="section__body">
          <div className="textual__part">
            <p className="text__desc" style={{ maxWidth: "500px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <Button>Read More</Button>
            <ul className="service__bullet">
              <li>General Healthcare</li>
              <li>Maternal Healthcare</li>
              <li>Child Healthcare</li>
              <li>Elder Healthcare</li>
            </ul>
          </div>
          <div className="image__part">
            <img src="./assets/images/shape.png" alt="side pic" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceSection;
