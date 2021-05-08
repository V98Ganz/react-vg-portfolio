import React from "react";
import { Link } from "@reach/router";
import projectsImg from "../img/projects-img.jpg";
import myJourney from "../img/my-journey-img.jpg";
import futurePlans from "../img/future-plans-img.jpg";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <main>
      <div className="home-intro">
        <div className="home-intro-text">
          <h1>Vitalie Ganziuc</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <section className="home-cards">
        <div>
          <Link className="home-link" to="/projects">
            <img className="home-img" src={projectsImg} alt="artistic laptop" />
            <p>Projects</p>
          </Link>
        </div>
        <div>
          <Link className="home-link" to="/about">
            <img
              className="home-img"
              src={myJourney}
              alt="network of digital lines"
            />
            <p>My journey</p>
          </Link>
        </div>
        <div>
          <Link className="home-link" to="/">
            <img
              className="home-img"
              src={futurePlans}
              alt="human and robot hands"
            />
            <p>Future Plans</p>
          </Link>
        </div>
      </section>
      <Technologies />
    </main>
  );
};

export default Home;
