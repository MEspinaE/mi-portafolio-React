import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll'; 

import './DropdownMenu.css'; 


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    

    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      

      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button 
        className="dropdown-toggle" 
        onClick={toggleMenu}
        aria-haspopup="true" 
        aria-expanded={isOpen} 

      >
        Menú
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="personal-info" smooth={true} duration={500} onClick={toggleMenu}>
            Información Personal
          </Link>
        </li>
        <li>
          <Link to="technologies" smooth={true} duration={500} onClick={toggleMenu}>
            Tecnologías
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
