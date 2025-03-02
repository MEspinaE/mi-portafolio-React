import React from 'react';
import './Header.css'; 
import miFoto from '../images/yo.jpg'; 
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './Contact.css'; 



const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={miFoto} alt="Marco Espina" className="profile-pic" />
        <div className="header-title">
          <h1>Marco Antonio Espina Erices</h1>
        </div>


      <div className="contact-buttons">
        <a
          href="https://www.instagram.com/asagi_corvinus/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaInstagram size={45} />
        </a>
        <a
          href="mailto:marcoantonio.espina5@gmail.com"
          className="contact-button"
        >
          <FaEnvelope size={45} />
        </a>
        <a
          href="https://github.com/MEspinaE"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaGithub size={45} />
        </a>
        <a
          href="https://wa.me/+56921106869"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaWhatsapp size={45} />
        </a>
        <a
          href="https://www.linkedin.com/in/marco-espina-3b7bba316/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaLinkedin size={45} />
        </a>
      </div>

      </div>
    </header>
  );
};

export default Header;
