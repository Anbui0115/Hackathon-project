import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem 0',
};

const columnStyle = {
  margin: '0 auto',
};

const socialIconsStyle = {
  listStyle: 'none',
  padding: 0,
};

const pageStyle = {
  minHeight: '100vh',  // Ensure the page height covers the viewport.
  display: 'flex',
  flexDirection: 'column',
};

const Footer = () => {
  return (
    <div style={pageStyle}>
      <footer style={footerStyle}>
      <div className="container" style={columnStyle}>
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>If you have any questions or need assistance, please don't hesitate to reach out.</p>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul style={socialIconsStyle}>
              <li><a href="/">Home</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
      </footer>
    </div>
  );
};

export default Footer;
