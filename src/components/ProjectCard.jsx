import React from 'react';

const ProjectCard = ({ title, description, image, onlineUrl, codeUrl }) => {
  return (
    <div id="proyecto" className="col-12 col-md-4 p-3">
      <div className="p-3" id="pcont">
        <div id="divimg">
          <img src={image} className="img-fluid" alt={title} />
        </div>
        <div id="divh2">
          <h2 className="p-2">{title}</h2>
        </div>
        <div id="divp">
          <p>{description}</p>
        </div>
        <div id="pbotton" className="row">
          <div id="vo" className="col-6">
            <a className="btn btn-primary" target="_blank" rel="noreferrer" href={onlineUrl} role="button">Ver online</a>
          </div>
          <div id="cf" className="col-6">
            <a target="_blank" rel="noreferrer" href={codeUrl}>Codigo fuente</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;