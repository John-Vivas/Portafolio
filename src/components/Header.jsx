import {} from 'react';
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>John E Vivas</h1>
        <p>Full Stack Developer</p>
        <p> JavaScript | Python | Java | Dart</p>
       
        <a href="#contact" className="btn">Contact me</a>
      </div>
    </header>
  );
}

export default Header;