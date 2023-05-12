import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import aboutus from '../assets/aboutus.jpg'
import '../App.css'

const AboutUs = () => {
  return (
    
    
    
      <Container style= {{marginTop: "3%",width : "100%"}}>
        <Row>
          <Col md={6}>
            <img src={aboutus} alt="About Us" className="aboutus"/>
          </Col>
          <Col md={6}>
            <h1 style= {{color: "red"}}>About Us</h1>
            <p style={{textAlign :"justify"}}>
               PixelLeap is a team of passionate professionals dedicated to providing solutions that help our customers achieve their goals. With [number] years of experience in the industry, we have honed our expertise to deliver the highest quality services that exceed our clients’ expectations.
            </p>
            <p style={{textAlign :"justify"}}>
              Our commitment to excellence is evident in everything we do, from our unique approach/techniques/methodologies to our outstanding customer service. We believe in fostering long-term relationships with our clients, which is why we take the time to understand their unique needs and tailor our solutions accordingly.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2 style= {{color: "red"}}>Featured</h2>
            <p style={{textAlign :"justify"}}>
            "Discover our latest cutting-edge tech products designed to make your life easier. From innovative software solutions to smart home devices, we offer a wide range of products to enhance your daily routines. Our team of experts is dedicated to providing the highest quality products and outstanding customer service, ensuring that you get the most out of your technology experience. Check out our featured products to see what's new and stay up-to-date with the latest trends in the tech industry."
            </p>
          </Col>
        </Row>
        <Footer />
      </Container>
    
    
);
};

export default AboutUs;
