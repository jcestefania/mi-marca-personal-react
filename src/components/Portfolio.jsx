import React, { useState, useEffect } from 'react';
import './styles/Portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        url: '#'
      },
      {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        url: '#'
      }
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
