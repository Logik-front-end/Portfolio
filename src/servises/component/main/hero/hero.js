import React from 'react';
import './hero.css';
import profilePic from '../../../img/image.png'

function Hero() {
  return (
    <section className="hero">
      <div className="intro">
        <p>Hello, I'm Logik,</p>
        <h1>Front-end </h1> <h1>Devloper</h1>
        <p>From Ukraine.</p>
        <button>Resume</button>
      </div>
      <div className="photo">
      <img src={profilePic} alt="" />
      </div>
    </section>
  );
}

export default Hero;
