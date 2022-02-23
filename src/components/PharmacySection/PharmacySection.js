import React from "react";
import { Button, Container } from "react-bootstrap";
import "./pharmacySection.css";

const PharmacySection = () => {
  return (
    <div className="pharmacy__section">
      <Container
        style={{ position: "relative" }}
        className="pharmacy__container"
      >
        <h3 className="section__title text-center mt-5">
          Order Medicine Online from Popular Pharmacy Nearby
        </h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div className="row">
          <div className="col mx-auto mb-3">
            <h4>Shahbag Medicine Corner</h4>
            <div>
              <img src="./assets/images/group 13.png" alt="" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>
          <div className="col mx-auto mb-3">
            <h4>Shahbag Medicine Corner</h4>
            <div>
              <img src="./assets/images/group 13.png" alt="" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>
          <div className="col mx-auto mb-3">
            <h4>Shahbag Medicine Corner</h4>
            <div>
              <img src="./assets/images/group 13.png" alt="" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>
        </div>
        <Button className="view__all__btn">View All</Button>
      </Container>
    </div>
  );
};

export default PharmacySection;
