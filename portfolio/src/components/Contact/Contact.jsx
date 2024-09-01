import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
import email from "./emailIcon.png";
import github from "./githubIcon.png";
import linkedin from "./linkedinIcon.png";


export const Contact =()=>{
    return(
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={email} alt="Email Icon"/>
                <a href="mailto:poonamselukar19@gmail.com">poonamselukar19@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedin} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/poonam-selukar-912577256">linkedin.com/poonamselukar</a>
            </li>
            <li className={styles.link}>
                <img src={github} alt="Email Icon"/>
                <a href="https://github.com/selukar">github.com/poonamselukar</a>
            </li>    
        </ul>
      </footer>
    );
}