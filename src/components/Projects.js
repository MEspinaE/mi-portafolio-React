import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Portafolio Web',
      description: 'Portafolio generado en base a React y Tailwind CSS.',
      link: 'https://github.com/MEspinaE/mi-portafolio-React',
    },
    {
      title: 'Aplicación de consulta de clima',
      description: 'App generada con API para verificar el estado del clima y el pronóstico en diferentes ciudades.',
      link: 'https://github.com/MEspinaE/Clima',
    },
    {
      title: 'Reloj digital',
      description: 'Reloj digital sencillo generado con código Python.',
      link: 'https://github.com/MEspinaE/reloj-digital',
    },
    {
      title: 'Generador de contraseñas aleatorias',
      description: 'Generador de contraseñas en Python.',
      link: 'https://github.com/MEspinaE/generador-contrase-as',
    },
    {
      title: 'Codificador QR',
      description: 'Encriptador de datos en QR generado en Python.',
      link: 'https://github.com/MEspinaE/codificador-qr',
    },
    {
      title: 'Web Login',
      description: 'Sistema de inicio de sesión generado con Flask, HTML y CSS.',
      link: 'https://github.com/MEspinaE/web-login',
    },
    {
      title: 'Portafolio Web Tecnología Reflex',
      description: 'Portafolio generado en Reflex usando Python.',
      link: 'https://github.com/MEspinaE/Portafolio-master',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="h2">Mis Proyectos</h2> {/* Añadida clase h2 */}
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
