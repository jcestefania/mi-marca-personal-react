import React from 'react';
import './styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects">
          <div className="project">
            <h3>Spotify Song Recommender</h3>
            <p>SpotifySongRecommender is a C++ project for analyzing and recommending songs. It includes features like recommending songs and artists based on musical genres, and generating popularity rankings by artist or genre.</p>
            <a href="https://github.com/jcestefania/SpotifySongRecommender" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className="project">
            <h3>Pathfinding Algorithm using A Star in a 2D Matrix</h3>
            <p>This Python project implements the A* algorithm to find the optimal path in a randomly generated 2D matrix with obstacles. It allows users to choose between Manhattan and Euclidean distances for the pathfinding process. The matrix, along with the calculated path, is displayed on the console.</p>
            <a href="https://github.com/jcestefania/Pathfinding-Algorithm-using-A-Star-in-a-2D-Matrix" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
          <div className="project">
            <h3>Machine Learning Client Project</h3>
            <p>Proyecto cliente para aplicar modelos de Machine Learning en un caso real.</p>
            <a href="https://github.com/jcestefania/machine-learning-client-project" target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
