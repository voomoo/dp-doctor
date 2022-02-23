import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./reviewSection.css";

const customPagingImg = [
  "./assets/images/pag1.png",
  "./assets/images/pag2.png",
  "./assets/images/pag3.png",
];

const ReviewSection = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={customPagingImg[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="review__section">
      <Container style={{ position: "relative" }} className="expert__container">
        <h3 className="section__title text-center mt-5">
          What Are The Patients Saying About us
        </h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div>
          <Slider {...settings}>
            <div className="review">
              <img src="./assets/images/faisal.png" />
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. when an unknown printer took a galley of type
                  and scrambled.
                </p>
                <h6>Faisal Ahmed</h6>
                <small>Student, CSE, University of Royal</small>
              </div>
            </div>
            <div className="review">
              <img src="./assets/images/image2.png" />
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. when an unknown printer took a galley of type
                  and scrambled.
                </p>
                <h6>Faisal Ahmed</h6>
                <small>Student, CSE, University of Royal</small>
              </div>
            </div>
            <div className="review">
              <img src="./assets/images/faisal.png" />
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. when an unknown printer took a galley of type
                  and scrambled.
                </p>
                <h6>Faisal Ahmed</h6>
                <small>Student, CSE, University of Royal</small>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
