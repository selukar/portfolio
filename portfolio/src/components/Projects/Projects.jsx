import {ProjectCard} from "./ProjectCard";
import React from "react";
import styles from "./Projects.module.css";
import project from "./project.png";
import { Link } from 'react-router-dom';


export const Projects = () =>{
    return(
        <>
        <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>

           <ProjectCard
           image={project} 
           title= "Sportify Clone"
           description="Created a high-fidelity Spotify clone with responsive design and user playlist management. "
           skill="HTML, CSS, JavaScript"
           link="https://github.com/selukar/SpotifyClone"
           />

              
           <ProjectCard
           image={project} 
           title= "Mini Tool Kit"
           description="Built a responsive Mini Toolkit app with React.js and Bootstrap, including a To-Do List, Calculator."
           skill="HTML, CSS, JavaScript, React, Bootstrap"
           link="https://github.com/selukar/Mini-Tool-Kit"
           />
              
           <ProjectCard
           image={project} 
           title= "Portfolio"
           description=" Highlights my web development projects with responsive designs and modern technologies."
           skill="HTML, CSS, JavaScript, React, Figma"
           link="https://github.com/selukar/portfolio"
           />

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