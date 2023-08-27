import React from 'react'
import { Carousel } from '../../components/Carousel/Carousel';
import Styles from './HomePage.module.css';
import {SKILLS_URL} from '../../constants/urls.js';
import { Heptagon } from '../../components/Poligons/Heptagon/Heptagon.jsx';
import Rhombus from '../../components/Poligons/Rhombus/Rhombus.jsx';
import me from '../../images/me.jpg'
import meAndMom from '../../images/meAndMom.jpg'
import meWithCompany from '../../images/meWithCompany.jpg'


export function HomePage() {
  return (
    <>

    <Carousel/>

    <h1 className={Styles.welcomeMessage}>Welcome to my resume page</h1>

    <div className={Styles.row}>

      <Heptagon urlPage={SKILLS_URL} urlImage={me}/>
      <Rhombus urlPage={SKILLS_URL} urlImage={meAndMom}/>
      <Heptagon urlPage={SKILLS_URL} urlImage={meWithCompany}/>

    </div>
    </>
  )
}