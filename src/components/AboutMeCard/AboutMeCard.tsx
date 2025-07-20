import React from 'react';
import Card from '../../ui/Card'; 
import './AboutMeCard.css';

import borderImg from '/src/assets/border.png'; 
import frameImg from '/src/assets/svframed.png'; 
import woodImg from '/src/assets/wood.png';
import profbdImg from '/src/assets/profbd.PNG';
import AboutDescription from './AboutDescription';
import AboutProfile from './AboutProfile';


const AboutMeCard: React.FC = () => {
  const title = "ABOUT ME"; 

  return (
    <div className="card-container"> 
      <div className="framed-container">
        <img
            src={frameImg}
            className="framed-img"
        />
      </div>
      <Card>
        <div className="about-me-wrapper">
            <div className="left-column">
              <img
                src={woodImg}
                alt="Wood Background"
                className="wood-background"
              />
              <AboutProfile />
            </div>
            <img
              src={profbdImg}
              alt="Profile Background"
              className="profbd-image"
            />

          <div className="right-column">
            <div className="about-title-container"> 
              <img
                  src={borderImg}
                  className="about-title-border"
              />
              <span className="about-title-text">{title}</span>
            </div>
            <AboutDescription/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutMeCard;