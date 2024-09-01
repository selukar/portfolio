
import {SkillItem} from "./SkillItem";
import React from "react";
import styles from "./Skills.module.css";
import css from "./css.png";
import html from "./html.png";
import figma from "./figma.png";
import mongodb from "./mongodb.png";
import react from "./react.png"; 
import js from "./js.svg";
import bootstrap from "./bootstrap.svg";
import mysql from "./mysql.svg";



export const Skills = () =>{
    return(
        <>
          <section className={styles.container} id="skills">
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.content}>
          <div className={styles.skills}>

                <SkillItem
                    image={html}
                    title="HTML"
                />
                <SkillItem
                    image={css}
                    title="CSS"
                />
                <SkillItem
                    image={js}
                    title="JavaScript"
                />
                <SkillItem
                    image={react}
                    title="React"
                />
                 <SkillItem
                    image={bootstrap}
                    title="Bootstrap"
                />
                 <SkillItem
                    image={mongodb}
                    title="MongoDB"
                />
                 <SkillItem
                    image={mysql}
                    title="MySQL"
                />
                <SkillItem
                    image={figma}
                    title="Figma"
                />
               
               


          

          </div>
          </div>
        </section> 
        </>
    );
}




/* import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";

export const Projects = () =>{
    return(
       <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((project,id)=>{
                return <ProjectCard key={id} project={project}/>
            })}
        </div>
       </section>
    );
} */

/* 
import cssImage from "./css.png";
import htmlImage from "./html.png";
import figmaImage from "./figma.png";
import mongodbImage from "./mongodb.png";
import reactImage from "./react.png"; */

/* import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
 
 */