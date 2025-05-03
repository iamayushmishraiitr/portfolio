import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      description: 'A full-featured e-commerce platform with product browsing, cart functionality, user authentication, and payment processing.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'A productivity app that helps users organize tasks, set priorities, and track project progress with visual metrics.',
      image: 'https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A messaging platform that allows real-time communication between users, with features like read receipts and typing indicators.',
      image: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'fullstack'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A weather application that provides current conditions and forecasts based on user location or search queries.',
      image: 'https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      github: 'https://github.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'API Authentication Service',
      description: 'A secure REST API service for user authentication with JWT, role-based access control, and password reset functionality.',
      image: 'https://images.pexels.com/photos/4068339/pexels-photo-4068339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      category: 'backend'
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets, with filtering capabilities and responsive charts.',
      image: 'https://images.pexels.com/photos/4021521/pexels-photo-4021521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'D3.js', 'TypeScript', 'CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'frontend'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title hidden">My Projects</h2>
        <p className="section-subtitle hidden">
          Here are some of my recent projects. Each one is crafted with attention to detail and a focus on user experience.
        </p>

        <div className="project-filters hidden">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'frontend' ? 'active' : ''} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={filter === 'backend' ? 'active' : ''} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={filter === 'fullstack' ? 'active' : ''} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card hidden" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;