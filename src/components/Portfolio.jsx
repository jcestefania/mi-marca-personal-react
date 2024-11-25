import React from 'react';
import './styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2>Portfolio</h2> {/* Título dentro del contenedor */}
        <div className="projects">
          <div className="project">
            <h3>Proyecto 1</h3>
            <p>Descripción del proyecto 1</p>
            <a href="#proyecto1">Ver proyecto</a>
          </div>
          <div className="project">
            <h3>Proyecto 2</h3>
            <p>Descripción del proyecto 2</p>
            <a href="#proyecto2">Ver proyecto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
