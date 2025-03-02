import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import PersonalInfo from './components/PersonalInfo';
import Technologies from './components/Technologies';
import Presentation from './components/Presentation';
import './index.css';
import StudiesAndCourses from './components/StudiesAndCourses';

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

                <section id="StudiesAndCourses">
                    <StudiesAndCourses />
                </section>
                
                <section id="technologies">
                    <Technologies />
                </section>

                <section id="projects">
                    <Projects />
                </section>

            </main>
        </div>
    );
};

export default App;
