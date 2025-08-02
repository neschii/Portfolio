import React from 'react';
import Card from '../../ui/Card';
import './AboutMeCard.css';

import borderImg from '/src/assets/border.png';
import frameImg from '/src/assets/svframed.png';
import woodImg from '/src/assets/wood.png';
import profbdImg from '/src/assets/profbd.PNG';
import AboutDescription from './AboutDescription';
import AboutProfile from './AboutProfile';
import DefaultBio from './Descriptions/DefaultBio';
import MoreBio from './Descriptions/MoreBio';
import ContactBio from './Descriptions/ContactBio';

interface AboutMeCardProps {
  activeBio: 'default' | 'more' | 'contact';
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ activeBio }) => {
  const title = "ABOUT ME";

  const renderBioContent = () => {
    switch (activeBio) {
      case 'more':
        return <MoreBio />;
      case 'contact':
        return <ContactBio />;
      case 'default':
      default:
        return <DefaultBio />;
    }
  };

  return (
    <div className="card-container">
      <div className="framed-container">
        <img
            src={frameImg}
            alt="Frame"
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
                  alt="Title Border"
                  className="about-title-border"
              />
              <span className="about-title-text">{title}</span>
            </div>
            <AboutDescription>
              {renderBioContent()}
            </AboutDescription>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutMeCard;