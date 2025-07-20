import React from 'react';
import './AboutProfile.css';


import portraitBorderImg from '/src/assets/portbdr.png'; 
import portraitImg from '/src/assets/selfportrait.png';         
import borderImg from '/src/assets/border.png';                


const AboutProfile: React.FC = () => {
  return (
    <>
      <div className="portrait-container">
        <img
          src={portraitBorderImg}
          alt="Portrait Border"
          className="portrait-border"
        />
        <img
          src={portraitImg}
          alt="Developer Portrait"
          className="profile-image"
        />
      </div>

      <div className="label-container">
        <div className="label-item name-label-container">
          <img src={borderImg} className="label-border" />
          <span className="label-text">Manoella</span>
        </div>
        <div className="label-item role-label-container">
          <img src={borderImg} className="label-border" />
          <span className="label-text">Fullstack</span>
        </div>
      </div>
    </>
  );
};

export default AboutProfile;
