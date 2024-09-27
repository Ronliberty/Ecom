import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center">If you have any questions, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <div className="contact-info mt-5">
        <h2 className="mb-3">Contact Information</h2>
        <p>Email: <a href="mailto:support@myecommerce.com">support@myecommerce.com</a></p>
        <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        <h2 className="mt-4">Follow Us</h2>
        <ul className="list-unstyled">
          <li><a href="https://facebook.com" className="link-primary">Facebook</a></li>
          <li><a href="https://twitter.com" className="link-primary">Twitter</a></li>
          <li><a href="https://instagram.com" className="link-primary">Instagram</a></li>
        </ul>
      </div>
      {/* Optional: Embed a Google Map */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=..."></iframe> */}
    </div>
  );
};

export default Contact;
