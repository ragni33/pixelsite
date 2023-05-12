
import React from 'react';
import logo2 from '../assets/logo2.jpg';
import logo1 from '../assets/logo1.png';
import logo3 from '../assets/logo3.jpg'
import { Container } from 'react-bootstrap';
import '../App.css'


function Partnerstech() {
  return (
   <Container className='Logos-section'>
       <section className="technology-partners">
      <h2>Our Technology Partners</h2>
      <div className="company-logos">
        <img src={logo1} alt="Company Logo 1"/>
        <img src={logo2} alt="Company Logo 2"  />
        <img src={logo3} alt="Company Logo 3" />
      </div>
    </section>
    
    </Container>

  );
}

export default Partnerstech;
