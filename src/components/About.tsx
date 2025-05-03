import React from 'react';
import { FileText, Award, Code } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title hidden">About Me</h2>
        <p className="section-subtitle hidden">
          Here you'll find more information about me, my current role, and my skills as a software developer.
        </p>

        <div className="about-content">
          <div className="about-text hidden">
            <h3>Get to know me!</h3>
            <p>
              I'm a passionate <strong>Software Developer</strong> with experience in building responsive 
              and performant web applications with clean user interfaces. I specialize in both frontend and 
              backend development, creating end-to-end solutions.
            </p>
            <p>
              I graduated from the <strong>Indian Institute of Technology Roorkee</strong> and I'm constantly 
              learning new technologies and techniques to enhance my skills as a developer and stay ahead 
              in this ever-evolving field.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn, and grow. If you have a good 
              opportunity that matches my skills and experience, feel free to contact me.
            </p>
            <div className="about-cta">
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#" className="btn btn-outline">
                <FileText size={18} />
                Resume
              </a>
            </div>
          </div>

          <div className="about-cards hidden">
            <div className="about-card">
              <div className="card-icon">
                <Code size={24} />
              </div>
              <h3>Experience</h3>
              <p>
                Worked on various projects, from small business websites to complex web applications,
                delivering quality work with attention to detail.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <Award size={24} />
              </div>
              <h3>Education</h3>
              <p>
                B.Tech in Computer Science from Indian Institute of Technology Roorkee, with focus on software
                engineering and algorithm design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;