import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Toast } from "react-bootstrap";
import cookie from '../assets/cookie.jpg'
import '../App.css';


function Cookies() {
  const [showCookieContainer, setShowCookieContainer] = useState(
    !localStorage.getItem("cookiesAccepted")
  );

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", true);
    setShowCookieContainer(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", false);
    setShowCookieContainer(false);
  };

  return (
   <Container>
   <div>
      <Toast
        onClose={() => setShowCookieContainer(false)}
        show={showCookieContainer}
        animation={true}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          backgroundColor: "#F8F9FA",
          zIndex: 9999
        }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <Image src={cookie} height={80} width={80} className="cookieImg" />
            </Col>
            <Col md={8}>
              <Toast.Header>
                <strong className="mr-auto">Cookie Policy</strong>
              </Toast.Header>
              <Toast.Body>
                We use cookies to personalize content and ads, to provide
                social media features and to analyze our traffic. We also share
                information about your use of our site with our social media,
                advertising and analytics partners.
              </Toast.Body>
              <div className="justify-content-end py-2">
                 <Button variant="primary" onClick={handleAccept} style={{marginLeft: "5px"}}>
                  Accept
                </Button>
                <Button variant="danger" onClick={handleReject} style={{marginLeft: "5px"}}>
                  Reject
                  </Button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </Toast>

    </div>
    </Container>

);
}

export default Cookies;
