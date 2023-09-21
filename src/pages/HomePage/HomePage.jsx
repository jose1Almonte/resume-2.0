import Styles from './HomePage.module.css';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import {Link} from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AditionalInformation from '../../components/AditionalInformation/AditionalInformation';
import UseAnimations from 'react-useanimations';
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

import Home from "../../components/Home/Home";
import { About } from "../../components/About/About";

export function HomePage() {
  const {windowWidth} = useWindowWidth();
  const divisorNumberForIcons = windowWidth > 500 ? 30 : 6;
  // const divisorNumberForCircle = 7.7;

  return (
    <div className={Styles.giantBox}>

    <Home/>

    <About/>

    <div className={`${Styles.section}`} id='projects'>
      <p className={`${"title"} ${Styles.textJustified} ${Styles.portfolio}`}>PORTFOLIO</p>
      <p className={`${"subtitle"} ${Styles.marginVertical} ${Styles.textIndent}`}>Each project is a unique piece of development 🧩</p>
      <div className={Styles.cardsContainer}>
        <ProjectCard 
        leftToRight={true} 
        siteUrl='https://rick-and-morty-site-78b94.web.app/'/>
        <ProjectCard 
        leftToRight={false} 
        siteUrl='https://rick-and-morty-site-78b94.web.app/'/>
      </div>
    </div>
    
    <div className={`${Styles.section}`} id='contact'>
      <div className={Styles.firstBoxContact}>
        <p>
        <p className={`${"title"} ${Styles.textJustified}`}>CONTACT</p>
        <p className={`${"subtitle"} ${Styles.marginVertical}`}>Don't be shy! Hit me up! 👇</p>
        </p>

        <div className={Styles.aditionalInformation}>
          <AditionalInformation/>
        </div>
      </div>
      <div className={Styles.secondBoxContact}>
        <p className={Styles.copyrightMessage}>Copyright © 2023. All rights are reserved</p>

        <div style={{display: 'flex'}}>
          <Link target='_blank' className={Styles.anotherLink} to={'https://github.com/jose1Almonte'}>
            <UseAnimations strokeColor='white' animation={github} size={windowWidth/divisorNumberForIcons} autoplay={true} loop={true} speed={0}/>
          </Link>

          <Link target='_blank' className={Styles.anotherLink} to={'https://www.linkedin.com/in/jos%C3%A9-antonio-almonte-hern%C3%A1ndez-1a32b528a/'}>
            <UseAnimations strokeColor='#0e76A8' animation={linkedin} size={windowWidth/divisorNumberForIcons} autoplay={true} loop={true} speed={0}/>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}