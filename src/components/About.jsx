import React, { useState } from 'react';
import './styles/About.css';
import image from '../assets/img/image.png'; // Ruta relativa para importar la imagen

function About() {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <div className="about-container">
        {/* Imagen añadida */}
        <img src={image} alt="Juan Carlos Estefanía Ovejero" className="profile-photo" />
        <div>
          <p style={{ display: showDescription ? 'block' : 'none' }}>
            Hola, soy Juan Carlos Estefanía. Soy estudiante de Ingeniería Informática...
          </p>
          <button onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Ocultar información' : 'Mostrar información'}
          </button>
        </div>
      </div>
      <div className="cv-section">
        <a href="path_to_cv.pdf" download="JuanCarlos_CV.pdf" className="btn-cv">
          Descargar CV
        </a>
        <a href="path_to_cv.pdf" target="_blank" className="btn-cv">
          Ver CV
        </a>
      </div>
    </section>
  );
}

export default About;
