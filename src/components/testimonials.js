import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import user4 from "../images/user-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      img: user1,
      name: "Emily Williams",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      img: user2,
      name: "John Doe",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      img: user3,
      name: "Sarah Brown",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      img: user4,
      name: "Michael Johnson",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
  ];


  const mainStyle = {
    width: "100%",
    textAlign: "center",
  };
  const titleStyle = {
    marginBottom: "60px",
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

  const cardStyle = {
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0  20px #0000000d",
    padding: "20px",
    borderRadius: "10px",
    color: "#676767",
    lineHeight: "1.4",
    width: "100%",
    height: "95%",
    textAlign: "left",
    marginTop: "10px",
  };
  const cardHeaderStyle = {
    display: "flex",
    marginBottom: "20px",
  };
  const cardh3Style = {
    color: "#212ea0",
    fontSize: "15px",
    fontWeight: "bold",
  };
  const cardSpanStyle = {
    fontSize: "15px",
  };
  const cardImageStyle = {
    width: "65px",
    borderRadius: "50%",
    marginRight: "10px",
    border: "4px solid #212EA0",
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Container style={mainStyle} id="testimonials">
      <Container style={titleStyle}>
        <p style={ptitleStyle}>TESTIMONIALS</p>
        <h2 style={h2TitleStyle}>What Student Says</h2>
      </Container>
      <Container>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          responsive={responsive}
          className=""
          itemClass={'item-carousel-class'}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
        {cards.slice(index, index + 2).map((card, idx) => (
          <div key={idx}>
            <Card style={cardStyle}>
              <Card.Header style={cardHeaderStyle}>
                <Card.Img src={card.img} style={cardImageStyle} />
                <Card.Title>
                  <h3 style={cardh3Style}>{card.name}</h3>
                  <span style={cardSpanStyle}>{card.location}</span>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
      </Container>
    </Container>
  );
};

export default Testimonials;