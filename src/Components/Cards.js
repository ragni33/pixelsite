import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import webdesign from '../assets/webdesign.jpg'
import graphic from '../assets/graphic.png'
import seo from '../assets/seo.jpg'
import iot from '../assets/iot.jpg'
import cloud from '../assets/cloud.jpg'
import socialmedia from '../assets/socialmedia.png'
import tech1 from '../assets/tech1.jpeg'
import tech2 from '../assets/tech2.jpg'
import tech3 from '../assets/tech3.jpg'
import '../App.css';




function Cards() {
  return (
    <Container style={{marginTop:"4%"}}>
    <Row>
      <Col sm={4} className="mb-3">
        <Card>
          <Card.Img variant="top" src={webdesign} />
          <Card.Body>
            <Card.Title>Website Design</Card.Title>
            <Card.Text>
            The process of designing and creating websites, including layout, typography, and functionality.
              </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card className="mb-3">
          <Card.Img variant="top" src={graphic} />
          <Card.Body>
            <Card.Title>Graphic Design</Card.Title>
            <Card.Text>
            The art of creating visual content to communicate information or messages to an audience.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card>
          <Card.Img variant="top" src={seo} />
          <Card.Body>
            <Card.Title>Search Engine Optimization</Card.Title>
            <Card.Text>
            The practice of optimizing websites to improve their visibility and ranking on search engine results pages.  </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <br />
    <Row>
      <Col sm={4} className="mb-3">
        <Card>
          <Card.Img variant="top" src={iot} />
          <Card.Body>
            <Card.Title>IoT (Internet of the services)</Card.Title>
            <Card.Text>
            A network of devices that are connected to the internet and can communicate with each other.   </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} className="mb-3">
        <Card>
          <Card.Img variant="top" src={socialmedia} />
          <Card.Body>
            <Card.Title>Social Medica Marketing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4} className="mb-3">
        <Card>
          <Card.Img variant="top" src={cloud} />
          <Card.Body>
            <Card.Title>Cloud Infrastructure</Card.Title>
            <Card.Text>
            A technology that enables the delivery of computing services, including servers storage.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Container className='techpartner'>


<h1>Tech-centered Business</h1>
<p>Our company is a leading provider of innovative tech services to clients across industries. We are committed to delivering exceptional solutions that help our clients optimize their operations and achieve their business goals. With a focus on cutting-edge technologies and a team of experienced professionals, we offer a comprehensive range of services that includes software development, cloud computing, IoT, and more. </p>

<div className="row">
      <div className="col-md-4 mb-3">
        <div className="card">
        <Card.Img variant="top" src={tech1} />
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
        <Card.Img variant="top" src={tech2} />
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <Card.Img variant="top" src={tech3} />
           
           </div>
      </div>
    </div>

        </Container>
    </Container>
  );
}

export default Cards;
