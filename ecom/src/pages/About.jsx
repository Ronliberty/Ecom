import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center">
        Welcome to MyEcommerce! We are committed to providing the best online shopping experience.
        Our mission is to connect consumers with quality products and exceptional service.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2023, MyEcommerce started as a small startup with a vision to revolutionize online shopping.
        Today, we are proud to serve thousands of customers across the globe.
      </p>
      <h2>Our Team</h2>
      <div className="row">
        <div className="col-md-4 text-center mb-4">
          <div className="card">
            <img src="path/to/team-member1.jpg" alt="Team Member 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card">
            <img src="path/to/team-member2.jpg" alt="Team Member 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">CTO</p>
            </div>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
      <h2>Our Values</h2>
      <ul className="list-group">
        <li className="list-group-item">Integrity</li>
        <li className="list-group-item">Customer Satisfaction</li>
        <li className="list-group-item">Innovation</li>
        <li className="list-group-item">Diversity and Inclusion</li>
      </ul>
    </div>
  );
};

export default About;
