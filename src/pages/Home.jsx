import React from 'react';
import { Link } from 'react-router-dom';
import rocket from '../assets/images/cohete.svg';


const Home = () => {
  return (
    <main className="container">
      <div id="cohete" className="row">
        <div id="contcohe" className="col-12">
          <Link to="/About"><img src={rocket} /></Link>
        </div>
        <div className="col-12 col-sm-6 my-4 mt-sm-5 text-center mb-3 offset-sm-3" id="sal">
          <p className="py-1">Bienvenido a mi sitio web! Has click para saber mas de mi</p>
        </div>
      </div>
    </main>
  );
};

export default Home;