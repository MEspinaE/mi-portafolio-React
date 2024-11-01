import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress } from 'react-icons/si'; 
import './Technologies.css';

const Technologies = () => {
  return (
    <section id="technologies">
      <h2>Tecnologías Usadas</h2>
      <div className="technologies-grid">
        <div className="technology-item">
          <FaReact title="React" />
          <span>React</span>
        </div>
        <div className="technology-item">
          <SiJavascript title="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="technology-item">
          <FaPython title="Python" />
          <span>Python</span>
        </div>
        <div className="technology-item">
          <FaCss3Alt title="CSS" />
          <span>CSS</span>
        </div>
        <div className="technology-item">
          <FaHtml5 title="HTML" />
          <span>HTML</span>
        </div>
        <div className="technology-item">
          <SiTailwindcss title="Tailwind CSS" />
          <span>Tailwind CSS</span>
        </div>
        <div className="technology-item">
          <FaNodeJs title="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="technology-item">
          <FaGithub title="GitHub" />
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
