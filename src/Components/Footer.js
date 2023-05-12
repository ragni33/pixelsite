import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'

function Footer() {
  return (
 <Container style={{marginTop: "4%", cursor: "pointer", backgroundColor: "lightblue", marginBottom: "1%"}}>
 <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col>
          <div>
    </div>
            <h2>About Us</h2>
         <p style={{textAlign: "justify"}}> 
            We are a team of highly motivated individuals who believe in the power of innovation to create meaningful change. 
            exciting experience. We strive to stay at the forefront of emerging technologies and are constantly pushing the boundaries of what is possible. </p>  
          </Col>
          <Col>
            <h2>Producs</h2>
            <ul className="list-unstyled">
              <li>IoT (Internet of the Services)</li>
              <li>SEO (Search Engine Optimisation)</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing Services</li>
            </ul>
          </Col>
          <Col>
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1-234-567-8901</p>
            <p>Address: 1234 Main Street, Anytown, USA</p>
          </Col>
          <Col>
            <h2>Follow Us</h2>
            {/* <ul className="list-unstyled-center">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <br />
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      <br />

      <FontAwesomeIcon icon={faInstagram} size="2x" />
    <br />
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </ul> */}
          </Col>
        </Row>
      </Container>
    </footer>
    </Container>
  );
}

export default Footer;
