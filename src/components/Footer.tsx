import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">

            <p>Building digital experiences with clean, efficient code.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-group">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="https://github.com/iamayushmishraiitr" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ayush-mishra-68b511254/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:a_mishra@es.iitr.ac.in">
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ayush Mishra. All Rights Reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;