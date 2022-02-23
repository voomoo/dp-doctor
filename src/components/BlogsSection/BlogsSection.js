import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogsSection = () => {
  const slider = React.useRef(null);
  return (
    <div className="expert__section" id="blog-section">
      <Container style={{ position: "relative" }} className="expert__container">
        <h3 className="section__title text-center mt-5">News & Blogs</h3>
        <h6
          className="section__desc text-center mx-auto mt-4 mb-5"
          style={{ maxWidth: "530px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </h6>
        <div>
          <Slider ref={slider} {...settings}>
            <BlogCard />

            <BlogCard />

            <BlogCard />

            <BlogCard />

            <BlogCard />
          </Slider>
          <div className="control d-flex">
            <h2 className="me-3" onClick={() => slider?.current?.slickPrev()}>
              <FaChevronCircleLeft />
            </h2>
            <h2 onClick={() => slider?.current?.slickNext()}>
              <FaChevronCircleRight />
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsSection;
