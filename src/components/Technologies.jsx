import React from 'react';
import cssIcon from '../img/css-icon.png'
import knexIcon from '../img/knex-icon.png';
import htmlIcon from '../img/html-icon.png';
import jsIcon from '../img/js-icon.png';
import nodeIcon from '../img/nodejs-icon.png';

const Technologies = () => {
    return (
        <section className="home-tech-section" >
            <p>known Technologies</p>
            <img src={cssIcon} alt="" />
            <img src={htmlIcon} alt="" />
            <img src={knexIcon} alt="" />
            <img src={jsIcon} alt="" />
            <img src={nodeIcon} alt="" />
        </section>
    );
};

export default Technologies;