import React from "react";
import { Button } from "react-bootstrap";
import "./blogSection.css";

const BlogCard = () => {
  return (
    <div className="blog__card mx-auto">
      <img src="./assets/images/Mask Group.png" alt="" />
      <small className="my-3">November 5, 2021</small>
      <h4>Cild care for Winter Season</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been
      </p>
      <div className="card__footer">
        <small>Dr. Saifur Rahman</small>
        <Button className="blog__btn">Read More</Button>
      </div>
    </div>
  );
};

export default BlogCard;
