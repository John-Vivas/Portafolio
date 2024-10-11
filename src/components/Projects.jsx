import {} from 'react';
import '../styles/Projects.css';
import badgeConversor from '../assets/badgeConversor.png';
import badgeliteratura from '../assets/badgeliteralura.png';
import badgeSpring from '../assets/badgeSpring.png';
import page from '../assets/page.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={badgeConversor} alt="Project 1" />
          <h3>Conversor de Monedas Backend Project</h3>
          <p>Technologies: java</p>
          <p>This is a simple project that works in the One Oracle Next Education program, which is about converting foreign currencies to your local currency</p>
          <a href="https://github.com/John-Vivas/Conversor-de-Monedas-BackendProject1.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <img src={badgeliteratura} alt="Project 2" />
          <h3>Literatura Backend Project</h3>
          <p>Technologies: Java, Spring Boot, Maven, git</p>
          <p>This is a project that works in the One Oracle Next Education program. This Literature application allows you to search for books, list authors and perform various queries about books and authors using an external API and a local database.</p>
          <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
          <img src={badgeSpring} alt="Project 3" />
          <h3>Forohub Backend Project</h3>
          <p>Technologies: Java, Spring Boot, Mysql</p>
          <p>This is a project working in the One Oracle Next Education program, ForumHub is an interactive forum application developed with Spring Boot 3. The application allows users to create, view, update and delete topics, as well as interact with the API using Insomnia. Additionally, the app includes authentication and JWT token generation for security.</p>

          <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project-card">
         <img src={page} alt="Project 4" />
          <h3>Page web Project</h3>
          <p>Technologies: Html, Css, JavaScript</p>
          <p>This is a personal and very simple project. In the future I want to change it to React and do the bachend in Django, but for now it is to sell my products.</p>
          <a href="https://john-vivas.github.io/page/" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
