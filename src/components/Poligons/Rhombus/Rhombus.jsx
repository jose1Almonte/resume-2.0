import React from 'react'
import { Link } from 'react-router-dom'
// import {SKILLS_URL} from '../../../constants/urls.js'
import Styles from './Rhombus.module.css'

export default function Rhombus({urlPage, urlImage}) {
  return (
    <Link to={urlPage} target='_blank' className={Styles.rhombus}>
        <img src={urlImage}/>
        <div className="gradientLayer"/>
    </Link>
  )
}
