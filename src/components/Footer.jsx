import {} from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/John-Vivas" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/john-e-vivas" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:j.vivas0122@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;