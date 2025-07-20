import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  title?: string;
  children: ReactNode;
  width?: string; // opcional, mas tem um padrão
}

const Card: React.FC<CardProps> = ({ title, children, width }) => {
  return (
    <div className="card-wrapper">
      <div className="card" style={{ width: width || '100%', maxWidth: '650px' }}>
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Card;
