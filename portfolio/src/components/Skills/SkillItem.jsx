import React from "react"
import styles from "./SkillItem.module.css";
import { Link } from 'react-router-dom';


export const SkillItem = ({image ,title})=>{
    return(
      <>
        
          <div  className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={image} alt={title} />
            </div>
            <p>{title}</p>
          </div>  
          
      </>
    );
}


