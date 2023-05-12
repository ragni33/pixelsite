
import { Card, Container } from 'react-bootstrap';
import React from 'react';
import design1 from '../assets/design1.jpg'




  const Designs = () => {
    return (
      <div className="featured-section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src={design1} alt="Featured Section" className="img-fluid" />
            </div>

            <div className="col-md-6">
              <h2>Our Brand as your solution!</h2>
              <p>Our expert's will provide you effective solutions!</p>
              <button className="btn btn-danger">Know More!</button>
            </div>
          </div>
        </div>
      </div>
  );

}

export default Designs;

