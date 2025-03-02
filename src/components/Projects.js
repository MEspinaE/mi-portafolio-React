import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Portafolio Web',
      description: 'Portafolio generado en base a React y Tailwind CSS.',
      link: 'https://github.com/MEspinaE/mi-portafolio-React',
      icon: 'fas fa-code',
    },
    {
      title: 'Aplicación de consulta de clima',
      description: 'App generada con API para verificar el estado del clima y pronóstico.',
      link: 'https://github.com/MEspinaE/weather-app',
      demoLink: 'https://consulta-clima-mespina.netlify.app',
      icon: 'fas fa-cloud-sun' 
    },
    {
      title: 'Finanzas Personales',
      description: 'Aplicativo de control financiero personal.',
      link: 'https://github.com/MEspinaE/finanzas-personales',
      demoLink: 'https://finanzas-mespina.netlify.app',
      icon: 'fas fa-calculator' 
    },
    {
      title: 'Reloj digital',
      description: 'Reloj digital sencillo generado con código Python.',
      link: 'https://github.com/MEspinaE/reloj-digital',
      icon: 'fas fa-clock' 
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
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <i className={project.icon} style={{ fontSize: '30px' }}></i>
            <div className="project-buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button github-button">
                <i className="fab fa-github"></i> GitHub
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-button demo-button">
                  <i className="fas fa-play-circle"></i> Ver Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;