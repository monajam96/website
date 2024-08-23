import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { Navbar, Nav, Container, Col, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import heroImage from "../images/hero.png";
import item from "../images/item.png";
import menu from "../images/menu.png";

function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(#08003ab3, #08003ab3), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  };
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#212121",
    padding: "14px 25px",
    fontSize: "16px",
    borderRadius: "30px",
    cursor: "pointer",
    border: "0",
    outline: "0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };
  

  const heroText = {
    maxWidth: "800px",
    display: "block",
    paddingTop: "190px",
  };
  return (
      <Container fluid style={backgroundImageStyle} id="home">
        <Row>
          <Col>
          <div className={color ? "custom-navbar-scrolled custom-navbar" : "custom-navbar"} >
            <Navbar expand="lg" className="pt-1 mobile-nav">
              <Container   
              >
                <Navbar.Brand href="#home">
                  <img
                    src={logo}
                    alt="GreatStack Logo"
                    width="170"
                    height="36"
                    className="d-inline-block align-top "
                  />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <img
                    src={menu}
                    alt="menu icon"
                    width="20"
                    height="20"
                    className="d-inline-block align-top"
                  />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Link
                      to="home"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      Home
                    </Link>
                    <Link
                      to="program"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      Program
                    </Link>
                    <Link
                      to="about"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      About us
                    </Link>
                    <Link
                      to="campus"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      Campus
                    </Link>
                    <Link
                      to="testimonials"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={100}
                      className="custom-nav-link"
                    >
                      Contact us
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container style={heroText}>
              <h1 className="custom-header">
                We Ensure better education for a better world
              </h1>
              <p 
                style={{
                  maxWidth: "700px",
                  margin: "20px auto 20px",
                  lineHeight: "1.40",
                }}
              >
                Our cutting-edge curriculum is designed to empower students with
                the knowledge, skills, and experiences needed to excel in the
                dynamic field of education
              </p>
              <button style={buttonStyle}>
                Explore more
                <Image
                  src={item}
                  style={{ width: "25px", height: "11px", paddingLeft: "4px" }}
                />
              </button>
            </Container>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Header;
