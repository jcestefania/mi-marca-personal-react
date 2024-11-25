import React, { useEffect, useState } from "react";
import $ from "jquery"; // Importa jQuery instalado desde npm
import "./styles/Portfolio.css";

function Portfolio() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const username = "jcestefania"; // Tu nombre de usuario en GitHub
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
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1</p>
          <a
            href="https://github.com/jcestefania/SpotifySongRecommender"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2</p>
          <a
            href="https://github.com/jcestefania/Pathfinding-Algorithm-using-A-Star-in-a-2D-Matrix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
        <div className="project">
          <h3>Proyecto 3</h3>
          <p>Descripción del proyecto 3</p>
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
