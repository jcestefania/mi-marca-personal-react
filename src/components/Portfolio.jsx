import React, { useEffect, useState } from "react";
import "./styles/Portfolio.css";

function Portfolio() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const username = "jcestefania"; // Tu nombre de usuario en GitHub
    const url = `https://api.github.com/users/${username}`;

    // Usar jQuery para realizar la llamada AJAX
    window.$.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        setGithubData(data);
      },
      error: function () {
        console.error("No se pudo obtener la información del perfil de GitHub.");
      },
    });
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      {/* Perfil de GitHub */}
      {githubData ? (
        <div className="github-profile">
          <h3>Perfil de GitHub</h3>
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
          <p>SpotifySongRecommender is a C++ project for analyzing and recommending songs. It includes features like recommending songs and artists based on musical genres, and generating popularity rankings by artist or genre.</p>
          <a
            href="https://github.com/jcestefania/SpotifySongRecommender"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
        <div className="project">
          <h3>Pathfinding Algorithm using A Star in a 2D Matrix</h3>
          <p>This Python project implements the A* algorithm to find the optimal path in a randomly generated 2D matrix with obstacles. It allows users to choose between Manhattan and Euclidean distances for the pathfinding process. The matrix, along with the calculated path, is displayed on the console.</p>
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
          <p>Análisis de datos para un cliente usando machine learning.</p>
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
