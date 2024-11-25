import React from 'react';
import './styles/About.css';
import image from '../assets/img/image.png';

function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <div className="about-container">
        <img src={image} alt="Juan Carlos Estefanía Ovejero" className="profile-photo" />
        <div>
          <p>
          Hola, soy Juan Carlos Estefanía. Soy estudiante de Ingeniería Informática en la etapa final de mi formación, con experiencia en proyectos relacionados con inteligencia artificial, machine learning y redes neuronales, así como en el desarrollo de soluciones tecnológicas innovadoras. Aquí encontrarás información sobre mis proyectos y habilidades.
          </p>
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
