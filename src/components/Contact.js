import React from 'react';
import './Contact.css'; // Asegúrate de tener estilos para los botones
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importar íconos

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contacto</h2>
      <div className="contact-buttons">
        <a
          href="https://www.instagram.com/asagi_corvinus/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaInstagram size={75} />
        </a>
        <a
          href="mailto:marcoantonio.espina5@gmail.com"
          className="contact-button"
        >
          <FaEnvelope size={75} />
        </a>
        <a
          href="https://github.com/MEspinaE"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaGithub size={75} />
        </a>
        <a
          href="https://wa.me/+56921106869"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaWhatsapp size={75} />
        </a>
        <a
          href="https://www.linkedin.com/in/marco-espina-3b7bba316/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaLinkedin size={75} />
        </a>
      </div>
    </section>
  );
};


export default Contact;
