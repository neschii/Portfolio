// src/components/CloudsBackground/CloudsBackground.tsx
import React from 'react';
import './CloudBg.css';
import cloudsImg from '/src/assets/clouds.webp';

const CloudBg: React.FC = () => {
  return (
    <div className="clouds-background">
      <div className="cloud cloud-1">
        <img src={cloudsImg} alt="" className="cloud-img" />
      </div>
      <div className="cloud cloud-2">
        <img src={cloudsImg} alt="" className="cloud-img" />
      </div>
      <div className="cloud cloud-3">
        <img src={cloudsImg} alt="" className="cloud-img" />
      </div>
    </div>
  );
};

export default CloudBg;