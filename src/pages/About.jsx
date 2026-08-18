import React from 'react';
import profileImg from '../assets/images/Profile.jpg';
import whImg from '../assets/images/WH.png';
import tpImg from '../assets/images/TP.png';
import avonImg from '../assets/images/Avon.png';
import mdImg from '../assets/images/MD.png';
import poliImg from '../assets/images/Politecnico.png';
import depcImg from '../assets/images/logo_depc.jpg';
import e4ccImg from '../assets/images/E4CC.png';

export default function About() {
  return (
    <div className="container my-5">

      {/* 1. SECCIÓN SUPERIOR: Perfil */}
      <section className="row align-items-center mb-5" id="profile">
        <div className="col-md-8">
          <h1 className="mb-3">Sobre mí</h1>
          <p className="lead">
            Apasionado por la tecnología, gestión de proyectos y los idiomas. Desarrollador Full Stack bilingüe con diplomado en Atención al cliente, ciberseguridad con estudio en Base de datos SQL.
          </p>
          <a href="/contacto" className="btn btn-blue mt-2">Enviar mensaje</a>
        </div>
        <div className="col-md-4 text-center mt-4 mt-md-0">
          <img
            src={profileImg}
            alt="Perfil"
            className="rounded-circle img-fluid shadow"
            style={{ width: '220px', height: '220px', objectFit: 'cover' }}
          />
        </div>
      </section>

{/* 2. STACK TECNOLÓGICO */}
      <div id="techstack" className="container-fluid py-4 mb-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 my-3 text-center">
              <h2 className="text-white">Stack Tecnológico</h2>
            </div>

            {/* Javascript */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>Javascript</p>
                <i className="fa-brands fa-square-js"></i>
              </div>
            </div>

            {/* PHP */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>PHP</p>
                <i className="fa-brands fa-php"></i>
              </div>
            </div>

            {/* HTML */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>HTML</p>
                <i className="fa-brands fa-html5"></i>
              </div>
            </div>



            {/* Bootstrap */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>Bootstrap</p>
                <i className="fa-brands fa-bootstrap"></i>
              </div>
            </div>

            {/* MySQL */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>MySQL</p>
                <i className="fa-solid fa-database"></i>
              </div>
            </div>

            {/* CSS */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>CSS</p>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
            </div>

            {/* Git */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>Git</p>
                <i className="fa-brands fa-git"></i>
              </div>
            </div>

            {/* React.js */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>React.js</p>
                <i className="fa-brands fa-react"></i>
              </div>
            </div>



            {/* Linux */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>Linux</p>
                <i className="fa-brands fa-linux"></i>
              </div>
            </div>

            {/* Apache */}
            <div className="col-6 col-sm-4 col-md-2 text-center p-2">
              <div id="tecnologias" className="rounded p-3 h-100 shadow-sm">
                <p>Apache</p>
                <i className="fa-solid fa-server"></i>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* 3. EXPERIENCIA LABORAL */}
      <section className="bg-white p-4 rounded shadow-sm mb-5" id="exp">
        <h2 className="mb-4 subtitle" id="exptit">Experiencia laboral</h2>

        {/* Experiencia 1 */}
        <div className="d-flex align-items-start mb-4">
          <img src={whImg} alt="WebHelp Logo" className="me-3" style={{ width: '80px' }} />
          <div>
            <h3>Agente Bilingüe</h3>
            <h4>WebHelp - One Link</h4>
            <p>Agente de servicio al cliente de importante entidad financiera de Estados Unidos con atención 100% en inglés...</p>
          </div>
        </div>

        {/* Experiencia 2 */}
        <div className="d-flex align-items-start mb-4">
          <img src={tpImg} alt="Teleperformance Logo" className="me-3" style={{ width: '80px' }} />
          <div>
            <h3>Agente de servicio al cliente</h3>
            <h4>Teleperformance</h4>
            <p>Recepción de llamadas y manejo de redes sociales en atención al cliente...</p>
          </div>
        </div>

        {/* Experiencia 3 */}
        <div className="d-flex align-items-start mb-4">
          <img src={avonImg} alt="Avon Logo" className="me-3" style={{ width: '80px' }} />
          <div>
            <h3>Agente de servicio técnico</h3>
            <h4>Avon</h4>
            <p>Preparación del equipo para entrega al usuario final. Solución de problemas informáticos...</p>
          </div>
        </div>
      </section>

      {/* 4. FORMACIÓN ACADÉMICA */}
      <section className="bg-white p-4 rounded shadow-sm mb-5" id="Aca">
        <h2 className="mb-4 subtitle" id="acatit">Formación académica</h2>

        <div className="row g-4">
          <div className="col-md-6 d-flex align-items-start">
            <img src={mdImg} alt="UNIMINUTO" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Tecnólogo en Gestión de Redes de Comunicación</h3>
              <h4>Universidad Minuto de Dios</h4>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <img src={mdImg} alt="UNIMINUTO" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Diplomado en Ciberseguridad</h3>
              <h4>Universidad Minuto de Dios</h4>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <img src={poliImg} alt="Politécnico" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Diplomado en servicio al cliente</h3>
              <h4>Politécnico Superior de Colombia</h4>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <img src={mdImg} alt="UNIMINUTO" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Ingeniería en desarrollo de software</h3>
              <h4>Universidad Minuto de Dios</h4>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <img src={depcImg} alt="DePC" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Curso DePC</h3>
              <h4>DePC Suite</h4>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <img src={e4ccImg} alt="E4CC" className="me-3" style={{ width: '80px' }} />
            <div>
              <h3>Curso Avanzado de Inglés</h3>
              <h4>E4CC</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IDIOMAS Y HOBBIES */}
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="bg-white rounded shadow-sm d-flex align-items-stretch overflow-hidden">
              {/* Caja morada del ícono */}
              <div className="bg-purple p-4 d-flex align-items-center justify-content-center text-white" style={{ minWidth: '130px', backgroundColor: '#370A6D' }}>
                <i className="fas fa-comments fa-3x"></i>
              </div>
              {/* Caja de texto */}
              <div className="p-4">
                <h3 className="h5 fw-bold mb-3" style={{ color: '#1e00c5' }}>Idiomas</h3>
                <p className="mb-1 fs-6">ESPAÑOL - Nativo</p>
                <p className="mb-1 fs-6">INGLÉS - Advanced C1</p>
              </div>
            </div>
          </div>

    </div>
  );
}