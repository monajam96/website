import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import program1 from "../images/program-1.png";
import program2 from "../images/program-2.png";
import program3 from "../images/program-3.png";

const Program = () => {
  const titleStyle = {
    textAlign: "center",
    color: "#212ea0",
    fontSize: "15px",
    fontWeight: "700",
    margin: "70px 0 30px",
  };

  const offerHeader = {
    fontSize: "30px",
    color: "#000f38",
    fontWeight: "750",
  };

  const programImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  return (
    <Container id="program">
      <div style={titleStyle}>
        <p className="mb-1">Our PROGRAM</p>
        <h2 style={offerHeader}>What We Offer</h2>
      </div>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={4} className="mb-5  px-3">
          <Image src={program1} style={programImageStyle} />
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-5  px-3">
          <Image src={program2} style={programImageStyle} />
        </Col>
        <Col xs={12} md={4} lg={4} className="mb-5  px-3">
          <Image src={program3} style={programImageStyle} />
        </Col>
      </Row>
    </Container>
  );
};

export default Program;
