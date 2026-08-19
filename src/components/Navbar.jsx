import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? 'navborder' : '');

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div id="nav" className="col-12 col-sm-6 p-3">
            <Link to="/">
              <ul className={`px-3 ${isActive('/home')}`}>Inicio</ul>
            </Link>
            <Link to="/about">
              <ul className={`px-3 ${isActive('/about')}`}>Sobre mi</ul>
            </Link>
            <Link to="/projects">
              <ul className={`px-3 ${isActive('/projects')}`}>Proyectos</ul>
            </Link>
            <Link to="/contact">
              <ul className={`px-3 ${isActive('/contact')}`}>Contacto</ul>
            </Link>
          </div>
          <div id="cv" className="col-12 col-sm-6 p-4">
            <a 
              id="txtbutton" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noreferrer"
              href="https://www.canva.com/design/DAFZLvOSf-M/g30fdTkEtFSjhJ6wvCxO-w/edit" 
              role="button"
            >
              Descargar CV <i id="download" className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;