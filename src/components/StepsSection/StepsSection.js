import React from "react";
import { Container } from "react-bootstrap";
import "./stepsSection.css";

const StepsSection = () => {
  return (
    <div className="steps__section">
      <Container style={{ position: "relative" }}>
        <h3 className="section__title text-center mt-5">
          Only Three Easy Steps to Follow
        </h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div className="section__body">
          <div className="textual__part my-auto">
            <div className="step">
              <h3>1</h3>
              <div className="content">
                <h4>Search the Doctor for Appointment</h4>
                <p>
                  Search your doctor by specialty or doctor name. Choose the
                  right doctor for you by viewing their profile, rating &
                  experience.
                </p>
              </div>
            </div>
            <div className="step">
              <h3>2</h3>
              <div className="content">
                <h4>Get Doctor Consultation through Video Calling</h4>
                <p>
                  Once you pay the required doctor fee, you will be joined to
                  the queue. Doctor will make a secured video call to do the
                  consultation.
                </p>
              </div>
            </div>
            <div className="step">
              <h3>3</h3>
              <div className="content">
                <h4>Get Your Prescription</h4>
                <p>
                  Once the video consultation is complete, the doctor will
                  upload the prescription. You can download the prescription
                  immediately or later.
                </p>
              </div>
            </div>
          </div>
          <div className="image__part">
            <img
              src="./assets/images/android.png"
              alt="side pic"
              style={{ maxWidth: "425px" }}
            />
          </div>
        </div>
        <img
          src="./assets/images/Vector 5.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "900px",
            zIndex: "-1",
            transform: "scaleX(1.3) ",
          }}
        />
      </Container>
    </div>
  );
};

export default StepsSection;
