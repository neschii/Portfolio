import React from 'react';
import './AboutDescription.css';

interface AboutDescriptionProps {
  children: React.ReactNode;
}

const AboutDescription: React.FC<AboutDescriptionProps> = ({ children }) => {
  return <div className="bio-content">{children}</div>;
};

export default AboutDescription;
