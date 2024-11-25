import React from "react";
import "./styles/About.css";
import image from "../assets/img/image.png";

function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <div className="about-container">
        <img
          src={image}
          alt="Juan Carlos Estefanía Ovejero"
          className="profile-photo"
        />
        <div>
          <p>
            Hola, soy Juan Carlos Estefanía. Soy estudiante de Ingeniería
            Informática en la etapa final de mi formación, con experiencia en
            proyectos relacionados con inteligencia artificial, machine learning
            y redes neuronales, así como en el desarrollo de soluciones
            tecnológicas innovadoras. Aquí encontrarás información sobre mis
            proyectos y habilidades.
          </p>
        </div>
      </div>

      {/* Botones del CV */}
      <div className="cv-section">
        <a
          href={`${process.env.PUBLIC_URL}/cv/JuanCarlos_Estefania_CV.pdf`}
          download="JuanCarlos_Estefania_CV.pdf"
          className="btn-cv"
        >
          Descargar CV
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/cv/JuanCarlos_Estefania_CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cv"
        >
          Ver CV
        </a>
      </div>

      {/* Perfil de LinkedIn */}
      <div className="linkedin-profile">
        <h3>Perfil de LinkedIn</h3>
        <p>Nombre: Juan Carlos Estefanía Ovejero</p>
        <p>
          <a
            href="https://www.linkedin.com/in/juan-carlos-estefan%C3%ADa-ovejero-b4b8862b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver perfil en LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
