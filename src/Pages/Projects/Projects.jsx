import React from 'react';
import styles from './Projects.module.css';
import images from '../../images';
import projectData from '../../projectsData';

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <section className={styles.projectHeading}> 
        <h3 className={styles.title}>Recent Top <span>Works</span></h3>
        <span>Here are a few projects I've worked on recently.</span>
      </section>

      <div className={styles.projects}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.cardImage}>
              <img src={project.preview} alt={project.name} />
              <div className={styles.cardImageLinks}> 
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <img src={images.gitImg} alt="git" width={35} />
                </a>
                {project.preview && (
                  <a href={project.preview} target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-eye" />
                  </a>
                )}
              </div>
            </div>
            <div className={styles.cardDetails}>
              <h2 className={styles.cardCategory}>{project.type}</h2>
              <h3 className={styles.cardTitle}>{project.name}</h3>
              <p className={styles.cardDiscription}>{project.description}</p>
              <div className={styles.cardSkills}>
                <h3>Skills Used</h3>
                {project.skillSet.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.cardSkillName} style={{ backgroundColor: skill.color }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
