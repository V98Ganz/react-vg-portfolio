import React from "react";
import cssIcon from "../img/css-icon.png";
import knexIcon from "../img/knex-icon.png";
import htmlIcon from "../img/html-icon.png";
import jsIcon from "../img/js-icon.png";
import nodeIcon from "../img/nodejs-icon.png";

const Technologies = () => {
  return (
    <section className="tech" >
      <h3>Known Technologies</h3>
      <div className="tech-section">
        <div className="tech-section-item">
          <img className="tech-section-image" src={nodeIcon} alt="" />
          <p>Nodejs</p>
        </div>
        <div className="tech-section-item">
          <img className="tech-section-image" src={jsIcon} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="tech-section-item">
          <img className="tech-section-image" src={htmlIcon} alt="" />
          <p>HTML5</p>
        </div>
        <div className="tech-section-item">
          <img className="tech-section-image" src={cssIcon} alt="" />
          <p>CSS3</p>
        </div>
        <div className="tech-section-item">
          <img className="tech-section-image" src={knexIcon} alt="" />
          <p>Knex</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
