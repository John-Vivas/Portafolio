import {} from 'react';
import '../styles/About.css'
//import profileImg from '../assets/profile.jpg';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
       {/*<img src={profileImg} alt="Profile" />*/} 
        <p>
          
        I am a skilled software developer with experience in building web and obile applications using a diverse range of technologies. My focus is on delivering efficient, scalable, and high-quality solutions, adhering to best practices in every project. I use JavaScript,Pyhton, Java and Dart, specializing in React, React Native,Flutter, to create dynamic web interfaces and mobile applications, ensuring responsive and cross-platform functionality
        </p>
      </div>
    </section>
  );
}

export default About;


