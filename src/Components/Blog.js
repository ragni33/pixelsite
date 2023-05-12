import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.png'
import Footer from './Footer';


const Blog = () => {
  return (
    <>
       
     
      <main>
        <Container style={{marginTop: "5%", backgroundColor : "lightblue"}}>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                  <Card.Title>Website Design</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque velit sit amet eros interdum, vel ultricies neque tincidunt.
                  </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title>Website Development</Card.Title>
                  <Card.Text>
                  A visually appealing website design is essential for creating a positive user experience and engaging with your audience.
                  </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                  <Card.Title>Search Engine Optimisation</Card.Title>
                  <Card.Text>
                  Developing a website that is fast, responsive, and easy to navigate is critical to ensuring that your visitors stay engaged and your business grows.
                    </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog4} />
                <Card.Body>
                  <Card.Title>Search Engine Optimisation</Card.Title>
                  <Card.Text>
                  It refers to the practice of optimizing a website's content, structure, and other factors to improve its visibility.
                     </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog5} />
                <Card.Body>
                  <Card.Title>IT Consultation</Card.Title>
                  <Card.Text>
                  IT consultation helps businesses improve their technology infrastructure, optimize workflows, and achieve their business goals more efficiently.
                      </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog6} />
                <Card.Body>
                  <Card.Title>Cloud Security</Card.Title>
                  <Card.Text>
                  IT security is crucial for protecting sensitive data, ensuring compliance with regulations, and maintaining the trust of your customers.
                   </Card.Text>
                  <Button variant="primary" href="#">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
