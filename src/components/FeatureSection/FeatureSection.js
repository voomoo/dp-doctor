import React from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "./FeatureCard";
import "./featureSection.css";

const features = [
  {
    image: "./assets/images/click.png",
    title: "Easy to Use",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    image: "./assets/images/carbon_time.png",
    title: "24 / 7 Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    image: "./assets/images/healthicons_doctor-outline.png",
    title: "Expert Doctors",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    image: "./assets/images/codicon_workspace-trusted.png",
    title: "Trusted",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
];

const FeatureSection = () => {
  return (
    <div className="feature__section">
      <Container style={{ position: "relative" }}>
        <h3 className="section__title text-center mt-5">Why Choose TM?</h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-12 col-md-3" key={index}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                text={feature.text}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeatureSection;
