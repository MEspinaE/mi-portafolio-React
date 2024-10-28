import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PersonalInfo from './components/PersonalInfo';
import Technologies from './components/Technologies';
import Presentation from './components/Presentation'; // Asegúrate de importar Presentation
import './index.css'; // Asegúrate de importar tu archivo CSS global

const App = () => {
  return (
    <div style={{ minHeight: '100vh', color: 'white' }}>
      <header>
        <Header />
      </header>
      <main>
        <section id="Presentation">
          <Presentation /> {/* Sección de presentación */}
        </section>

        <section id="personal-info">
          <PersonalInfo /> {/* Sección de información personal */}
        </section>

        <section id="technologies">
          <Technologies /> {/* Sección de tecnologías usadas */}
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
