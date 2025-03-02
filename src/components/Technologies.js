import React, { useState } from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress } from 'react-icons/si';
import './Technologies.css';

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const technologies = [
    { icon: <FaReact title="React" />, name: 'React' },
    { icon: <SiJavascript title="JavaScript" />, name: 'JavaScript' },
    { icon: <FaPython title="Python" />, name: 'Python' },
    { icon: <FaCss3Alt title="CSS" />, name: 'CSS' },
    { icon: <FaHtml5 title="HTML" />, name: 'HTML' },
    { icon: <SiTailwindcss title="Tailwind CSS" />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs title="Node.js" />, name: 'Node.js' },
    { icon: <FaGithub title="GitHub" />, name: 'GitHub' }
  ];

  return (
    
    <section id="technologies">
      <h2>Tecnologías Usadas</h2>
      <div className="technologies-grid">
        
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`technology-item ${hoveredIndex === index ? 'focused' : hoveredIndex !== null ? 'blurred' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
