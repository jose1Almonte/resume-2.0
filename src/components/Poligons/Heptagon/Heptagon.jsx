import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Heptagon.module.css'

export function Heptagon({urlPage, urlImage}) {
  return (
    <Link to={urlPage} className={Styles.heptagonContainer}>
        <img src={urlImage}/>
        <div className="gradientLayer"/>
    </Link>
  )
}
