import React, { useEffect, useState, useRef } from "react";
import $ from "jquery"; // Importa jQuery instalado desde npm
import "./styles/Portfolio.css";

function Portfolio() {
  const [githubData, setGithubData] = useState(null);
  const githubRef = useRef(null); // Referencia para el efecto de rotación

  useEffect(() => {
    const username = "jcestefania";
    const url = `https://api.github.com/users/${username}`;

    // Llamada AJAX con jQuery
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        setGithubData(data); // Actualiza el estado de React
      },
      error: function () {
        console.error("No se pudo obtener la información del perfil de GitHub.");
      },
    });
  }, []);

  // Maneja el movimiento del cursor
  const handleMouseMove = (event) => {
    const rect = githubRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // Posición del cursor dentro de la caja (X)
    const y = event.clientY - rect.top; // Posición del cursor dentro de la caja (Y)

    const centerX = rect.width / 2; // Centro horizontal de la caja
    const centerY = rect.height / 2; // Centro vertical de la caja

    const rotateX = ((y - centerY) / centerY) * 10; // Rotación eje X
    const rotateY = ((x - centerX) / centerX) * -10; // Rotación eje Y (negativo para invertir)

    githubRef.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Restaura la posición al salir de la caja
  const handleMouseLeave = () => {
    githubRef.current.style.transform = "perspective(400px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      {/* Perfil de GitHub */}
      {githubData ? (
        <div
          className="github-profile"
          ref={githubRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            <img
              src={require("../assets/img/github.png")}
              alt="Logo de GitHub"
              className="github-logo"
            />
            Perfil de GitHub
          </h3>
          <p>Nombre: {githubData.name}</p>
          <p>Repositorios públicos: {githubData.public_repos}</p>
          <p>
            <a
              href={githubData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil en GitHub
            </a>
          </p>
        </div>
      ) : (
        <p>Cargando datos de GitHub...</p>
      )}

      {/* Proyectos */}
      <div className="projects">
        <div className="project">
          <h3>Spotify Song Recommender</h3>
          <p>
            SpotifySongRecommender is a C++ project for analyzing and
            recommending songs...
          </p>
          <a
            href="https://github.com/jcestefania/SpotifySongRecommender"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
        <div className="project">
          <h3>Pathfinding Algorithm</h3>
          <p>This Python project implements the A* algorithm...</p>
          <a
            href="https://github.com/jcestefania/Pathfinding-Algorithm-using-A-Star-in-a-2D-Matrix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
        <div className="project">
          <h3>Machine Learning client project</h3>
          <p>
            Análisis de datos para un cliente usando machine learning...
          </p>
          <a
            href="https://github.com/jcestefania/machine-learning-client-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
