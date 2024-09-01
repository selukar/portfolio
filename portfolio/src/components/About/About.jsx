import React from "react";
import styles from"./About.module.css";
import aboutImage from "./aboutImage .png";
import cursorIcon from "./cursorIcon .png";

export const About=()=>{
    return(
        <section  className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div>
                  <img 
                    src={aboutImage } 
                    alt="me sitting with a laptop"
                    className={styles.aboutImage}
                  />
                </div>
                
                <div>
                  <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                          src={cursorIcon } 
                          alt="cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>B.E graduate student</h3>
                            <p>I recently graduated with a Bachelor of Engineering degree and am eager to gain practical experience through a job or internship. I am interested in opportunities that align with my skills and would be excited to contribute to new projects.</p>
                        </div>
                    </li>
                  </ul>
                </div>
            
            </div>

        </section>
    )
}