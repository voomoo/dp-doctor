import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar as BSNavbar,
} from "react-bootstrap";
import Select from "react-select";
import { BiWorld } from "react-icons/bi";
import "./navbar.css";

const options = [
  { value: "en", label: "En" },
  { value: "bn", label: "Bn" },
];

const Navbar = () => {
  const [language, setLanguage] = useState(options[0]);
  return (
    <BSNavbar bg="light" expand="lg" className="bs__navbar">
      <Container fluid>
        <BSNavbar.Brand href="#">
          <img src="./assets/images/Logo.png" alt="logo" />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarScroll" />
        <BSNavbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Doctor" className="mx-2 nav__link">
              <NavDropdown.Item href="#action3">Doctor 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Doctor 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Doctor 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" className="mx-2 nav__link">
              <NavDropdown.Item href="#action3">Services 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Services 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Services 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pharmecy Owner" className="mx-2 nav__link">
              <NavDropdown.Item href="#action3">
                Pharmecy Owner 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pharmecy Owner 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pharmecy Owner 3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2 nav__link" href="#action1">
              About Us
            </Nav.Link>
            <Nav.Link className="mx-2 nav__link" href="#action2">
              Blog
            </Nav.Link>
            <Nav.Link className="mx-2 nav__link" href="#">
              Contact
            </Nav.Link>
            <Nav.Link className="mx-2 nav__link" href="#">
              FAQ
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <BiWorld size={28} className="me-2" />
            <Select
              className="me-2"
              options={options}
              value={language}
              onChange={(value) => {
                setLanguage(value);
              }}
              styles={{ border: "none" }}
            />
            <Button
              className="px-5 login__btn"
              style={{ borderRadius: "40px" }}
            >
              Login
            </Button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
