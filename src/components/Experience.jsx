import {} from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Company 1</h3>
          <p>Position: Full Stack Developer</p>
          <p>Duration: June 2020 - Present</p>
          <p>Responsibilities: Worked on web development, backend APIs, etc.</p>
        </div>
        <div className="experience-item">
          <h3>Company 2</h3>
          <p>Position: Backend Developer</p>
          <p>Duration: Jan 2019 - May 2020</p>
          <p>Responsibilities: Developed RESTful APIs and managed databases.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
