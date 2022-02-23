import React from "react";
import { Container } from "react-bootstrap";
import "./expertSection.css";

const ExpertSection = () => {
  return (
    <div className="expert__section">
      <Container style={{ position: "relative" }} className="expert__container">
        <h3 className="section__title text-center mt-5">
          Expert & Varified Doctors
        </h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div className="row">
          <div className="col-12 col-md-3 mx-auto">
            <ul className="expert__bullet">
              <li>General Physician</li>
              <li>Pediatrics / Child Care</li>
              <li>Gynaecology</li>
              <li>Neurology / Brain</li>
              <li>Pulmonology / Lungs</li>
              <li>Herbal medicine</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mx-auto">
            <ul className="expert__bullet">
              <li>Gastroenterology</li>
              <li>Cardiology / Heart</li>
              <li>Ophthalmology / Eye</li>
              <li>Dentistry / Dental Care</li>
              <li>Endocrinology / Diabetes</li>
              <li>Occupational therapy</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mx-auto">
            <ul className="expert__bullet">
              <li>Nephrology / Kidney</li>
              <li>Obstetrics</li>
              <li>ENT / Ear, Nose and Throat</li>
              <li>Parasitology</li>
              <li>Podiatry</li>
              <li>Oncology</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mx-auto">
            <ul className="expert__bullet">
              <li>Psychiatry</li>
              <li>Rheumatology</li>
              <li>Urology</li>
              <li>Chiropractic</li>
              <li>Dermatology</li>
              <li>Vascular Surgery</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExpertSection;
