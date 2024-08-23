import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../images/about.png";

const About = () => {
  const aboutStyle = {
    margin: "10% auto",
    width: "90%",
    paddingLeft: '3%',
    paddingRight: '3%',
  };

  const abouth3 = {
    fontSize: "20px",
    fontWeight: "630",
    color: "#212ea0",
  };

  const abouth2 = {
    fontSize: "35px",
    color: "#000f38",
    margin: "10px 0",
    maxWidth: "400px",
    fontWeight: "700",
  };

  

  return (
    <Container style={aboutStyle} id="about">
      <Row>
        <Col xs={12} md={6} lg={6} className="mb-4">
          <Image src={aboutImage} className="image-style"></Image>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <h3 style={abouth3}>ABOUT UNIVERSITY</h3>
          <h2 style={abouth2}>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
