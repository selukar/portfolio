import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "./HeroImg.png"; 


export const Hero=()=>{
    return(
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Poonam</h1>
            <p className={styles.description}>
            Dedicated engineering student with a strong passion for technology. Thriving to solve complex problems and continuously widening skill set. Committed to delivering innovative solutions and seeking to contribute to exciting projects by collaborating with professionals in the tech industry.
            </p>
            <a href="mailto:poonamselukar19@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={HeroImg} alt="Hero image of me" className={styles.heroImg}/>  
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/> 
        </section>
     
    )
}