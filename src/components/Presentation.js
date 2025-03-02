import React from 'react';
import './Presentation.css';

const Presentation = () => {
  return (
    <section className="presentation-section">
      <h2 className="presentation-title">A cerca de mí.</h2>
      <p className="presentation-text">
        Hola, soy Marco Espina. Desde hace 5 años, me he sumergido en el mundo de la programación a través de diversos cursos que han ampliado mis habilidades y conocimientos, actualmente me encuentro estudiando la carrera de Técnico en Programación en el Instituto Profesional Providencia.
        <br className="line-break" />
        Soy un apasionado de la tecnología y disfruto de los videojuegos, el cine y la buena comida.
        <br className="line-break" />
        Tengo experiencia en diferentes tecnologías como React, Tailwind, entre otras. Mi curiosidad por aprender me impulsa a explorar nuevas áreas en este campo en constante evolución. Estoy emocionado por las posibilidades que ofrece la programación y cómo puede transformar ideas en realidad.
        
      </p>
    </section>
  );
};

export default Presentation;
