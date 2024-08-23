import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../images/gallery-1.png';
import image2 from '../images/gallery-2.png';
import image3 from '../images/gallery-3.png';
import image4 from '../images/gallery-4.png';
import item from "../images/item2.png";

const Campus = () => {
  const mainStyle = {
    margin: '80px auto',
    width: '90%',
    textAlign: 'center',
    paddingLeft: '15px',
    paddingRight: '15px',
  };

  const ptitleStyle = {
    fontSize: '15px',
    color: '#212ea0',
    fontWeight: 'bold',
  };

  const h2TitleStyle = {
    fontWeight: 'bold',
    color: '#000f38',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#212ea0',
    color: '#fff',
    padding: '14px 25px',
    fontSize: '16px',
    borderRadius: '30px',
    cursor: 'pointer',
    border: '0',
    outline: '0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Container style={mainStyle} id='campus'>
      <Container>
        <p style={ptitleStyle}>GALLERY</p>
        <h2 style={h2TitleStyle}>Campus Photos</h2>
      </Container>
      <Row className="mt-4 mb-4 px-4">
        <Col xs={6} sm={6} md={3} className="mb-4">
          <Image src={image1} style={imageStyle} />
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-4">
          <Image src={image2} style={imageStyle} />
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-4">
          <Image src={image3} style={imageStyle} />
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-4">
          <Image src={image4} style={imageStyle} />
        </Col>
      </Row>
      <Container>
        <button style={buttonStyle}>
          See more here
          <Image
            src={item}
            style={{ width: '25px', height: '11px', paddingLeft: '4px' }}
          />
        </button >
      </Container>
    </Container>
  );
};

export default Campus;
