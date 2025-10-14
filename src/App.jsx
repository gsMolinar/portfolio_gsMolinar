import React from "react";
import "./App.css";


import profileImg from './assets/profilePicture.jpeg'; 

export default function App() {
  return (
    <div className="cv-document">
      
  
      <header className="cv-header">
        
       
        <div className="header-photo-section">
          <h1 className="header-text-vertical">gsMolinar</h1>
          <div className="photo-container">
            <img 
              src={profileImg} 
              alt="Mi foto de perfil" 
              className="profile-photo"
            />
           
          </div>
        </div>
        
   
        <div className="header-contact-section">
          <h1 className="name-title">Roberto Hernández Molinar</h1>
          <p className="contact-detail date">Ciudad Juárez, Chihuahua</p>
          <p className="contact-detail">
            <a href="mailto:robertohdzmolinar248@gmail.com">
              robertohdzmolinar248@gmail.com
            </a>
          </p>

          <div className="social-links">
            <span>
                <a 
                    href="https://www.linkedin.com/in/roberto-hernandez-molinar-a554b4284/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    💼 LinkedIn
                </a>
            </span>
          </div>
          <h2>Sobre Mi</h2>
          <p className="summary-text">
            Estudiante de Ingeniería en Sistemas Computacionales con un gran interés por el conocimiento y una fuerte disposición para aprender sobre tecnología. Me motiva aplicar la programación para resolver problemas reales y generar un impacto social positivo. Busco desarrollarme en proyectos que me hagan crecer como ingeniero, tanto en el front-end como en el back-end.
          </p>
        </div>
      </header>


      <main className="cv-main">
        
    
        <div className="cv-left-column">
            
          <section className="cv-section">
            <h2>Formación Académica</h2>
            <p className="item-title">
              <strong>Universidad Autónoma de Ciudad Juárez (UACJ)</strong>
            </p>
            <p className="item-subtitle">Ingeniería en Sistemas Computacionales</p>
            <p className="item-detail">2.º semestre | Promedio: 9.2</p>
          </section>
          
          <section className="cv-section">
            <h2>Habilidades Técnicas</h2>
            <p className="skills-list">
              <strong>Lenguajes:</strong> HTML, CSS, JavaScript, SQL, C, C++
            </p>
            <p className="skills-list">
              <strong>Frameworks y librerías:</strong> React, Node.js, Chart.js
            </p>
            <p className="skills-list">
              <strong>Bases de datos:</strong> PostgreSQL
            </p>
            <p className="skills-list">
              <strong>Herramientas:</strong> Git, github
            </p>
          </section>

          <section className="cv-section">
            <h2>Certificaciones</h2>
            <ul className="list-unstyled">
              <li>Curador de Datos — Fundación Carlos Slim</li>
              <li>Técnico en Electrónica — Fundación Carlos Slim</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Idiomas</h2>
            <p className="item-detail">Inglés — B1 (Intermedio)</p>
          </section>
        </div>

      
        <div className="cv-right-column">
          
          <section className="cv-section">
            <h2>Experiencia Laboral</h2>
            <p className="item-title">
              <strong>CTDI INTERMEX — Técnico Analista</strong>
            </p>
            <p className="item-subtitle">2024 | Ciudad Juárez, Chihuahua</p>
            <ul className="list-bullets">
              <li>Diagnóstico y reparación de módems de telecomunicaciones.</li>
              <li>Uso de multímetro y sustitución de componentes dañados.</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Proyecto Destacado</h2>
            <p className="item-title">
              <strong>Sistema FIFO de Control de Inventario (Hackatón 2025)</strong>
            </p>
            <ul className="list-bullets">
              <li>Aplicación web para gestión de inventarios con metodología FIFO.</li>
              <li>Backend con Node.js y PostgreSQL, frontend con React y Chart.js.</li>
            </ul>
          </section>
          
        </div>
      </main>

    </div>
  );
}