import React from 'react';
import './StudiesAndCourses.css';

const StudiesAndCourses = () => {
  return (
    <div id="studies-and-courses">
      <h2>Estudios y Cursos</h2>
      
      <div className="studies-courses-list">
        <div className="study-item">
          <div>
            <h3>
              Diploma en JavaScript 
              <i className="fas fa-laptop-code tech-icon"></i>
            </h3>
            <p>Obtenido en 2024 después de completar un curso intensivo en desarrollo web de Udemy.</p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1AgjZYz0Ya-TzTMWWldtYBTrAFmrl8hCf/view?usp=drive_link" 
            download 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="download-btn diploma-btn">
              <i className="fas fa-download"></i> 
            </button>
          </a>
        </div>

        <div className="study-item">
          <div>
            <h3>
              Currículum Vitae 
              <i className="fas fa-file-alt tech-icon"></i>
            </h3>
            <p>Currículum actualizado con mis habilidades y experiencia en programación.</p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1O4qg5R1SK7ci9dTVOvqmMjD4KbuyB1AT/view?usp=drive_link" 
            download 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="download-btn cv-btn">
              <i className="fas fa-download"></i> 
            </button>
          </a>
        </div>

        <div className="study-item">
          <div>
            <h3>
              Diploma en Python 
              <i className="fas fa-laptop-code tech-icon"></i>
            </h3>
            <p>Diploma otorgado por la finalización de un curso de desarrollo en Python de Udemy.</p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1XxX5MP9hMxamORybK6ZsW4mGxMu33nf5/view?usp=drive_link" 
            download 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="download-btn second-diploma-btn">
              <i className="fas fa-download"></i> 
            </button>
          </a>
        </div>
        
        <div className="study-item">
          <div>
            <h3>
              Certificado de Capacitación 
              <i className="fas fa-certificate tech-icon"></i>
            </h3>
            <p>Certificado otorgado por la finalización del curso de Analista Desarrollador de aplicaciones de software impartido por Duoc UC y SENCE.</p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1qlPkupo3u-C4rJ57DxWSuXDvJAHttYX9/view?usp=drive_link" 
            download 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="download-btn second-diploma-btn">
              <i className="fas fa-download"></i> 
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudiesAndCourses;
