import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Portafolio Web',
      description: 'Portafolio generado en base a React y Tailwind CSS.',
      link: 'https://github.com/MEspinaE/mi-portafolio-React',
      icon: 'fas fa-code' // Icono
    },
    {
      title: 'Aplicación de consulta de clima',
      description: 'App generada con API para verificar el estado del clima y el pronóstico en diferentes ciudades.',
      link: 'https://github.com/MEspinaE/Clima',
      icon: 'fas fa-cloud-sun' 
    },
    {
      title: 'Reloj digital',
      description: 'Reloj digital sencillo generado con código Python.',
      link: 'https://github.com/MEspinaE/reloj-digital',
      icon: 'fas fa-clock' 
    },
    {
      title: 'Generador de contraseñas aleatorias',
      description: 'Generador de contraseñas en Python.',
      link: 'https://github.com/MEspinaE/generador-contrase-as',
      icon: 'fas fa-lock' 
    },
    {
      title: 'Codificador QR',
      description: 'Encriptador de datos en QR generado en Python.',
      link: 'https://github.com/MEspinaE/codificador-qr',
      icon: 'fas fa-qrcode' 
    },
    {
      title: 'Web Login',
      description: 'Sistema de inicio de sesión generado con Flask, HTML y CSS.',
      link: 'https://github.com/MEspinaE/web-login',
      icon: 'fas fa-sign-in-alt' 
    },
    {
      title: 'Portafolio Web Tecnología Reflex',
      description: 'Portafolio generado en Reflex usando Python.',
      link: 'https://github.com/MEspinaE/Portafolio-master',
      icon: 'fas fa-laptop' 
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="h2">Mis Proyectos</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <i className={project.icon} style={{ fontSize: '30px', marginTop: '10px',}}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
