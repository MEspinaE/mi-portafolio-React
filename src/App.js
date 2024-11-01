import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PersonalInfo from './components/PersonalInfo';
import Technologies from './components/Technologies';
import Presentation from './components/Presentation';
import './index.css';

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{ minHeight: '100vh', color: 'white', position: 'relative' }}>
            {/* Capa de iluminación */}
            <div
                className="luz"
                style={{
                    position: 'fixed',
                    left: `${mousePosition.x - 350}px`,
                    top: `${mousePosition.y - window.scrollY - 350}px`, // Ajuste para mantener el centro con scroll
                    width: '700px',
                    height: '700px',
                    background: `radial-gradient(circle, rgba(225, 225, 225, 0.08) 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 0,
                    borderRadius: '50%',
                    transition: 'background 0.3s',
                }}
            ></div>

            {/* Contenido de la aplicación */}
            <header>
                <Header />
            </header>
            <main style={{ position: 'relative', zIndex: 10 }}>
                <section id="Presentation">
                    <Presentation />
                </section>

                <section id="personal-info">
                    <PersonalInfo />
                </section>

                <section id="technologies">
                    <Technologies />
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
