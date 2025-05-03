import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="accent">Ayush Mishra</span>
            </h1>
            <h2 className="hero-subtitle">Software Developer & Engineer</h2>
            <p className="hero-description">
              I build exceptional digital experiences with clean, efficient code.
              Passionate about creating innovative solutions that solve real-world problems.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/iamayushmishraiitr" target="_blank" rel="noopener noreferrer">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-mishra-68b511254/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:a_mishra@es.iitr.ac.in">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-blob"></div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down">
          <span>Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;