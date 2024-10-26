import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './student.css'
import './dashboard.css'

import ucnLogo from './assets/IsologoUCN.png'
import iconClose from './assets/arrow-reduce-tag.svg'
import iconOpen from './assets/arrow-enlarge-tag.svg'
import iconHome from './assets/home.svg'
import iconUser from './assets/profile-circle.svg'
import iconProgram from './assets/submit-document.svg'
import iconCheck from './assets/doc-glass-in.svg'

function Home() {
  const [isVisible, setVisible] = useState(true);
  const toggleBar = () => {
    setVisible(!isVisible);
  }

  return (
    <div className="container">
      <div className={`bar-left ${isVisible ? '' : 'collapsed'}`}>
        <img src={ucnLogo} className='logo-banner' alt='Logo UCN' />
       
        <div className='teacher-name'>Nombre Alumno</div>

        <Link to="/" className="function-item link-container">
          <img src={iconHome} alt="Icono Home" width="24" height="24" />
          <span className="function-text">Inicio</span>
        </Link>

        <Link to="/" className="function-item link-container">
          <img src={iconUser} alt="Icono User" width="24" height="24" />
          <span className="function-text">Perfil</span>
        </Link>

        <Link to="/" className="function-item link-container">
          <img src={iconCheck} alt="Icono Survey" width="24" height="24" />
          <span className="function-text">Visualizar encuestas</span>
        </Link>

        <Link to="/" className="function-item link-container">
          <img src={iconProgram} alt="Icono Program" width="24" height="24" />
          <span className="function-text">Responder encuestas</span>
        </Link>

      </div>
      <button onClick={toggleBar} className="toggle-button">
        <img src={isVisible ? iconClose : iconOpen} alt="Toggle Icon" width="24" height="24" />
      </button>

      <div className={`dash-panel ${isVisible ? '' : 'collapsed'}`}>
        <h2>¡Bienvenido/a al Sistema de Encuestas!</h2>
        <p>El Sistema de Encuestas es una plataforma destinada a facilitar la realización y gestión de encuestas por parte de los estudiantes de la Universidad Católica del Norte que estén realizando el Magíster en Gestión Ambiental.</p>
        <h2>Contacto</h2>
        <p>
        Dirección Escuela Prevención de Riesgos y Medio Ambiente: dir.epryma@ucn.cl<br />
        Director Magister Gestión Ambiental: dirmga@ucn.cl
        </p>
      </div>

    </div>
  );
}

export default Home;