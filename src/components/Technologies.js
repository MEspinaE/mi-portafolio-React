import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress } from 'react-icons/si'; 
import './Technologies.css';

const Technologies = () => {
  return (
    <section id="technologies">
      <h2>Tecnologías Usadas</h2>
      <div className="technologies-grid">
        <div className="technology-item"><FaReact title="React" /></div>
        <div className="technology-item"><SiJavascript title="JavaScript" /></div>
        <div className="technology-item"><FaPython title="Python" /></div>
        <div className="technology-item"><FaCss3Alt title="CSS" /></div>
        <div className="technology-item"><FaHtml5 title="HTML" /></div>
        <div className="technology-item"><SiTailwindcss title="Tailwind CSS" /></div>
        <div className="technology-item"><FaNodeJs title="Node.js" /></div>
        <div className="technology-item"><FaGithub title="GitHub" /></div>
      </div>
    </section>
  );
};

export default Technologies;
