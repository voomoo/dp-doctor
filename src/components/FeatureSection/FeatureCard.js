import React from "react";
import "./featureSection.css";

const FeatureCard = ({ image, title, text }) => {
  return (
    <div className="feature__card mx-auto">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
