import React from 'react';

const Footer = () => {
  return (
    <footer className="container mt-auto pb-2 pt-5">
      <div className="row">
        <div id="i1" className="col-3 linkIcon">
          <a href="https://github.com/AlvaroV2746" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="linkedin.com/in/alvaro-villarreal-854061188" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div id="i2" className="col-3">
          <p>Software Developer</p>
        </div>
        <div id="i3" className="col-3">
          <p>Alvarovillarreal2746@hotmail.com</p>
        </div>
        <div id="i4" className="col-3 wsIcon">
          <div id="fix" className='ws-icon'>
            <a href="https://api.whatsapp.com/send?phone=573184559655" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;