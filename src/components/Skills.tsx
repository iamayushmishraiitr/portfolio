import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'RESTful APIs', level: 85 },
  ];

  const otherSkills = [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Testing', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Agile Methodology', level: 80 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title hidden">Skills & Expertise</h2>
        <p className="section-subtitle hidden">
          I've acquired a diverse range of skills throughout my journey as a developer. Here's a snapshot of my technical expertise and proficiency levels.
        </p>

        <div className="skills-container hidden">
          <div className="skills-group">
            <h3 className="skills-group-title">Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-group-title">Other Skills</h3>
            <div className="skills-list">
              {otherSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;