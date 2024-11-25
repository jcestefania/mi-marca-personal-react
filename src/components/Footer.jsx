import React from "react";
import "./styles/Footer.css";
import linkedinLogo from "../assets/img/linkedin_white.jpg";
import githubLogo from "../assets/img/github_white.jpg";

function Footer() {
  return (
    <footer>
      <div className="social-links">
        {/* Enlace a LinkedIn */}
        <a
          href="https://www.linkedin.com/in/juan-carlos-estefan%C3%ADa-ovejero-b4b8862b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>

        {/* Enlace a GitHub */}
        <a
          href="https://github.com/jcestefania"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
      </div>

      <p>© 2024 Juan Carlos Estefanía Ovejero. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

