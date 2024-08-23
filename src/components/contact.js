import React from "react";
import { Container, Image, Row,Col} from "react-bootstrap";
import { MDBFooter } from 'mdb-react-ui-kit';
import Form from "react-bootstrap/Form";
import msg from "../images/msg-icon-ClKDHhj8.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import location from "../images/location.png";
import item from "../images/item2.png";

const Contact = () => {
  const mainStyle = {
    margin: "80px auto",
    marginBottom:'0',
    width: "90%",
    textAlign: "center",
    paddingLeft: "50px",
    paddingRight: "50px",

  };
  const titleStyle = {
    marginBottom: "30px",
  };
  const ptitleStyle = {
    fontSize: "15px",
    color: "#212ea0",
    fontWeight: "bold",
  };
  const h2TitleStyle = {
    fontWeight: "bold",
    color: "#000f38",
  };
  const h3Style = {
    color: "#000f38",
    fontWeight: "500",
    fontSize: "25px",
    marginBottom: "20px",
  };
  const imgStyle = {
    width: "7%",
    marginLeft: "10px",
  };
 
  const listItemStyle = {
    display: "flex",
    paddingBottom: "20px",
  };
  const imgLeftStyle = {
    width: "6%",
    height:'10%',
    marginRight: "10px",
  };
  const inputStyle = {
    backgroundColor: "#ebecfe",
  };
  const buttonStyle = {
    backgroundColor: "#212ea0",
    color: "#fff",
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
  const footerStyle={
    backgroundColor:"#f5f5f5",
    display:'flex',
    justifyContent:'space-between',
    margin: '10px auto',
    alignItems: 'center',
    borderTop: '1px solid #797979',
    padding: '20px 0',
    color:'black',
  }
  const footerListStyle={
    listStyle: 'none',
    display: 'inline-block',
    marginLeft: '20px',
  }
  const footerLink={
    textDecoration: 'none',
    lineHeight: '1',
    cursor: 'pointer',
    color:'black',
  }
  return (
    <Container style={mainStyle} id="contact">
      <Container style={titleStyle}>
        <p style={ptitleStyle}>Contact Us</p>
        <h2 style={h2TitleStyle}>Get in Touch</h2>
      </Container>
      <Row>
        <Col xs={12} md={6} style={{ textAlign: "left", color: "#676767" }}>
          <h3 style={h3Style}>
            Send us a message
            <Image src={msg} style={imgStyle}></Image>
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul style={{ paddingLeft: "0" }}>
            <li style={listItemStyle}>
              <img src={email} style={imgLeftStyle} alt="-"></img>
              Contact@GreatStack.dev
            </li>
            <li style={listItemStyle}>
              <img src={phone} style={imgLeftStyle} alt="-"></img>+1
              123-456-7890
            </li>
            <li style={listItemStyle}>
              <img src={location} style={imgLeftStyle} alt="-"></img>77
              Massachusetts Ave, Cambridge MA 02139, United States
            </li>
          </ul>
        </Col>
        <Col  xs={12} md={6} style={{ textAlign: "left", color: "#676767" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write your messages here</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                style={inputStyle}
              />
            </Form.Group>
          </Form>

          <button style={buttonStyle}>
            Submit now
            <Image
              src={item}
              style={{ width: "25px", height: "11px", paddingLeft: "4px" }}
            />
          </button>
        </Col>
      </Row>
      <MDBFooter style={footerStyle}>
        <p>© 2024 Edusity. All rights reserved.</p>
        <ul>
            <li style={footerListStyle}><a href= 'contact' style={footerLink}>Terms of Services</a></li>
            <li style={footerListStyle}><a href='contact' style={footerLink}>Privacy Policy</a></li>
        </ul>
        
  
    </MDBFooter>
    </Container>
  );
};

export default Contact;
