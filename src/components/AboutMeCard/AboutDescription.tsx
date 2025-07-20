import React from 'react';
import './AboutDescription.css';

const AboutDescription: React.FC = () => {
  return (
    <div className="bio-content">
      <p className="bio-text">
        Cultivating elegant solutions in the digital fields of <b>web development</b>.
        Specializing in <b>React</b>, <b>Typescript</b>, growing beautiful user interfaces — 
        and also planting some seeds in the <b>backend</b> with <b>Node.js</b> and <b>Python</b>.
      </p>
      <p className="bio-text">
        When I'm not coding, you'll find me tending to my garden of side projects or
        playing videogames....
      </p>
    </div>
  );
};

export default AboutDescription;
