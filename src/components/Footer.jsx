// Footer.jsx
import React from 'react';

const footerStyle = {
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '.1px 0', // Reduced padding for smaller height
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  fontSize: '0.85rem', // Smaller font size for a more compact look
};

const footerContentStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const footerLinksStyle = {
  marginTop: '5px', // Less space between links and text
  display: 'flex',
  gap: '10px',
};

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '0.85rem',
};

const hoverLinkStyle = {
  color: '#3498db',
  textDecoration: 'underline',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; 2024 Movie App. All rights reserved.</p>
        <div style={footerLinksStyle}>
          <a href="#about" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
            About
          </a>
          <a href="#contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
            Contact
          </a>
          <a href="#privacy" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

