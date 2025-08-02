import React from 'react';
import './ButtonTabs.css';
import phoneImg from '/src/assets/contact.png';
import projImg from '/src/assets/projects.png';
import heartImg from '/src/assets/heart.png';

interface ButtonTabsProps {
  onMore: () => void;
  onContact: () => void;
  onDefault: () => void;
}

const ButtonTabs: React.FC<ButtonTabsProps> = ({ onMore, onContact, onDefault }) => {
  return (
    <div className="button-tabs-container">
      <button className="tab-button" onClick={onMore}>
        <span className="tab-text">‎ ‎ More+</span>
        <img src={heartImg} alt="About" className="img-icon" />
      </button>
      <button className="tab-button" onClick={onDefault}>
        <span className="tab-text">projects</span>
        <img src={projImg} alt="Projects" className="img-icon" />
      </button>
      <button className="tab-button" onClick={onContact}>
        <span className="tab-text">‎ contact</span>
        <img src={phoneImg} alt="Contact" className="img-icon" />
      </button>
    </div>
  );
};

export default ButtonTabs;