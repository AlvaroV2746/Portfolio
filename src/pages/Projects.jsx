import React from 'react';
import ABMClientes from '../assets/images/abmclientes.png';
import ABMVentas from '../assets/images/abmventas.png';
import bluco from '../assets/images/bluco.png';

const Projects = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>Proyectos</h1>
        </div>
        <div>
          <p>Los siguientes son algunos de los trabajos que he realizado</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Proyecto 1 */}
          <div id="proyecto" className="col-12 col-md-4 p-3">
            <div className="p-3" id="pcont">
              <div id="divimg">
                <img src={ABMClientes} className="img-fluid rounded" alt="ABM Clientes" />
              </div>
              <div id="divh2">
                <h2 className="p-2">TASK MANAGER</h2>
              </div>
              <div id="divp">
                <p>Alta, baja y modificación de un registro de clientes. Realizado en HTML, CSS, PHP, Bootstrap y Json.</p>
              </div>
              <div id="pbotton" className="row">
                <div id="vo" className="col-6">
                  <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://taskmanager.infinityfree.me/" role="button">Ver online</a>
                </div>
                <div id="cf" className="col-6">
                  <a target="_blank" rel="noreferrer" href="https://github.com/AlvaroV2746/task-organizer/blob/main/index.php">Codigo fuente</a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 2*/}
          <div id="proyecto" className="col-12 col-md-4 p-3">
            <div className="p-3" id="pcont">
              <div id="divimg">
                <img src={ABMVentas} className="img-fluid rounded" alt="Sistema de Gestión de Ventas" />
              </div>
              <div id="divh2">
                <h2 className="p-2">SISTEMA DE GESTIÓN DE VENTAS</h2>
              </div>
              <div id="divp">
                <p>Sistema de gestión de clientes, productos y ventas. Realizado en HTML, CSS, PHP, MVC, Bootstrap, Js, Ajax, jQuery y MySQL de base de datos.</p>
                <p>Ingresar con credenciales:</p>
                <p>Usuario: test</p>
                <p>password: test</p>
              </div>
              <div id="pbotton" className="row">
                <div id="vo" className="col-6">
                  <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://alvaroproyectos.infinityfreeapp.com/login.php" role="button">Ver online</a>
                </div>
                <div id="cf" className="col-6">
                  <a target="_blank" rel="noreferrer" href="https://github.com/AlvaroV2746/SALES-MANAGMENT-SYSTEM">Codigo fuente</a>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 3*/}
          <div id="proyecto" className="col-12 col-md-4 p-3">
            <div className="p-3" id="pcont">
              <div id="divimg">
                <img src={bluco} className="img-fluid rounded" alt="Sistema de Gestión de Ventas" />
              </div>
              <div id="divh2">
                <h2 className="p-2">SISTEMA DE VENTAS DE TURISMO BLUCO</h2>
              </div>
              <div id="divp">
                  <p>Sitio web de turismo comunitario para agencia de viajes en Colombia. Realizado en HTML, CSS, react, Bootstrap, Js.</p>
              </div>
              <div id="pbotton" className="row">
                <div id="vo" className="col-6">
                  <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://blucotravel.com/" role="button">Ver online</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Projects;