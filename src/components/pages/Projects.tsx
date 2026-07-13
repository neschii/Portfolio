import React from 'react';
import CloudBg from '../CloudBg/CloudBg';
import Card from '../../ui/Card';
import projectCardBorder from '../../assets/projectcardborder.png';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <CloudBg />
      <div className="projects-page">
        <div className="projects-inner">


          <div className="projects-grid">
            {projects.map((item) => (
              <div key={item.title} className="project-card-frame">
                <Card width="100%">
                  <div className="project-card-content">
                    <img src={item.image} alt={item.title} className="project-card-image" />
                    <h3 className="project-card-title">{item.title}</h3>
                    <div>
                      <p className="project-description">{item.description}</p>
                      <div className="project-tech-list">
                        {item.tech.map((tech) => (
                          <span key={tech} className="project-tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href={item.github} target="_blank" rel="noreferrer" className="project-link">
                      View on GitHub →
                    </a>
                  </div>
                </Card>
                <img src={projectCardBorder} alt="project card border" className="project-card-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
