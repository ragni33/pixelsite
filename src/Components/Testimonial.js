import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import clip1 from '../assets/clip1.jpg'
import clip2 from '../assets/clip2.jpg'
import clip3 from '../assets/clip3.jpg'
import '../App.css'



function Testimonial(){
return(
<Container style={{marginTop: "1%", cursor: "pointer", backgroundColor: "light" , paddingTop: "1%"}}>
<section id="testimonial-section">
      <Container style={{marginTop: "1%"}}>

        <h2 style={{color: "red", textAlign: "center"}}>What Our Customers Say</h2>
        <Carousel>
          <Carousel.Item style={{marginTop: "5%"}}>
            <Row style={{marginTop: "1%"}}> 
              <Col md={3}>
                <img
                  className="d-block w-100"
                  src={clip1}
                  alt="First testimonial"
                />
              </Col>
              <Col md={9}>
                
                <p>"The store is always clean and well-organized, which makes it easy to find what I need. I appreciate the convenience of having a local grocery store in my neighborhood. I love shopping at this grocery store because they carry a variety of specialty"</p>
                <h5>Juan Rodriguez </h5>
                <p>Owner, grocery store</p>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item style={{marginTop: "5%"}}>
            <Row>
              <Col md={3}>
                <img
                  className="d-block w-100"
                  src={clip2}
                  alt="Second testimonial"
                />
              </Col>
              <Col md={9}>
                <p>"I was able to find everything I needed for my project, and the staff was able to answer all of my questions. The prices are reasonable, and the staff is always friendly and helpful. I highly recommend this hardware store for anyone in the local area"</p>
                <h5>John Smith,</h5>
                <p>Owner of a local hardware store</p>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item style={{marginTop: "5%"}}>
            <Row>
              <Col md={3}>
                <img
                  className="d-block w-100"
                  src={clip3}
                  alt="Second testimonial"
                />
              </Col>
              <Col md={9}>
                <p>"A good marketing manager should be able to lead communicate effectively with other departments and stakeholders. A manager should communicate clearly, consistently and honestly with their team members."
                
            </p>
                <h5>Jane Doe</h5>
                <p>Marketing Manager</p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
    </Container>

    );
}
export default Testimonial;