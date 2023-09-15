import React from 'react'
import Styles from './ProjectCard.module.css'

export default function ProjectCard() {
  return (
    <div className={`${Styles.cardContainer} ${Styles.displayFlex}`}>
        
        <div className={`${Styles.projectImage}`}/>

        <div className={`${Styles.description}`}>

        </div>
    
    </div>
  )
}
