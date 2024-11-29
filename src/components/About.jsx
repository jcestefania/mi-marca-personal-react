import React, { useRef } from "react";
import "./styles/About.css";
import image from "../assets/img/image.png";

function About() {
  const linkedinRef = useRef(null);

  // Maneja el movimiento del cursor
  const handleMouseMove = (event) => {
    const rect = linkedinRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // Posición del cursor dentro de la caja (X)
    const y = event.clientY - rect.top; // Posición del cursor dentro de la caja (Y)

    const centerX = rect.width / 2; // Centro horizontal de la caja
    const centerY = rect.height / 2; // Centro vertical de la caja

    const rotateX = ((y - centerY) / centerY) * 10; // Rotación vertical
    const rotateY = ((x - centerX) / centerX) * -10; // Rotación horizontal (negativo para invertir)

    linkedinRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Restaura la posición al salir de la caja
  const handleMouseLeave = () => {
    linkedinRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="sobre-mi">
      <h1>👨🏻‍💻 Sobre mí</h1>
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
      <div
        className="linkedin-profile"
        ref={linkedinRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h3>
          <img
            src={require("../assets/img/linkedin.png")}
            alt="Logo de LinkedIn"
            className="linkedin-logo"
          />
          Perfil de LinkedIn
        </h3>
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
