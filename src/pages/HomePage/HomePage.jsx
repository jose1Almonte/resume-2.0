import Styles from './HomePage.module.css';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useAnimationContainer } from '../../hooks/useAnimationContainer';
import { FcCursor } from "react-icons/fc";
import { RxGlobe } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiFirebase } from "react-icons/di";
import { FcCommandLine } from "react-icons/fc";
import ReactCurvedText from 'react-curved-text';

export function HomePage() {

  // const {windowWidth} = useWindowWidth();
  const {borderRadius} = useAnimationContainer();
  const {windowWidth} = useWindowWidth();
  const divisorNumberForIcons = 30;
  const divisorNumberForCircle = 7.7;

  const [isHovered, setIsHovered] = useState({
    linkedIn: false,
    gitHub: false,
  })

  const handleMouse = (name, value) => {
    setIsHovered({
      ...isHovered,
      [name]: value,
    })
  }

  return (
    <div className={Styles.giantBox}>

    <div className={`${Styles.section} ${Styles.firstSection}`} id='home'>
      <div className={Styles.firstElement}>
        <h1>Front-End React Developer <FcCursor size={windowWidth/18}/> </h1>
        <h2>Hi, I&apos;m José Almonte. A passionate Front-end React Developer based in Caracas, Venezuela. <RxGlobe color='#61DBFB'/></h2>
        <div>
          <Link to='https://www.linkedin.com/in/jos%C3%A9-antonio-almonte-hern%C3%A1ndez-1a32b528a/' target='_blank' className={Styles.redirect}>
            <h2 
            className={Styles.linkedin_icon}
            onMouseEnter={() => {handleMouse('linkedIn', true)}} 
            onMouseLeave={() => {handleMouse('linkedIn', false)}}>
              <CiLinkedin 
              color={isHovered.linkedIn ? '#0e76A8' : 'rgba(255,255,255,0.5)'} 
              size={windowWidth/divisorNumberForIcons}/>
            </h2>
          </Link>
          <Link to='https://github.com/jose1Almonte' target='_blank' className={Styles.redirect}>
            <h2 
            className={Styles.linkedin_icon}
            onMouseEnter={() => {handleMouse('gitHub', true)}} 
            onMouseLeave={() => {handleMouse('gitHub', false)}}>
              <AiFillGithub 
              color={isHovered.gitHub ? 'white' : 'rgba(255,255,255,0.5)'} 
              size={windowWidth/divisorNumberForIcons}/>
            </h2>
          </Link>

        </div>
      </div>

      <div className={Styles.heroImg} style={{
        borderRadius: borderRadius,
      }}/>
    </div>

    <div className={`${Styles.section}`} id='about'>
      <div className={Styles.techStack} style={{height: windowWidth/15}}>
        
        <div className="">
          <h1>Tech Stack</h1>
        </div>

        <div className="">
          <DiHtml5 color='#F06529' size={windowWidth/divisorNumberForIcons}/>
          <DiCss3 color='#264de4' size={windowWidth/divisorNumberForIcons}/>
          <DiJsBadge color='#F0DB4F' size={windowWidth/divisorNumberForIcons}/>
        </div>
        
        <div className="">
          <DiReact color='#61DBFB' size={windowWidth/divisorNumberForIcons}/>
          <DiFirebase color='#FFA611' size={windowWidth/divisorNumberForIcons}/>
        </div>
      </div>

      <div className={Styles.aboutBox}>
        <div className={Styles.middleBox}>

          <div className={Styles.desktopContainer}/>
          <div className={Styles.rotating_vector} style={{width: windowWidth/6.6}}>
          <FcCommandLine className={Styles.comandLineIcon} size={(windowWidth/divisorNumberForIcons)+20}/>
          <ReactCurvedText 
            width= {windowWidth/divisorNumberForCircle}
            height={windowWidth/divisorNumberForCircle}
            cx={(windowWidth/divisorNumberForCircle)/2}
            cy={(windowWidth/divisorNumberForCircle)/2}
            rx={(windowWidth/divisorNumberForCircle)/3}
            ry={(windowWidth/divisorNumberForCircle)/3}
            startOffset={0}
            reversed={false}
            text='Front-End Web Developer'
            textProps={{"style": {"fontSize": windowWidth/42}}}
            textPathProps={{"fill": "#ffffff"}}
            tspanProps={{"dy": (windowWidth/divisorNumberForCircle)/6.82}}
            ellipseProps={null}
            svgProps={{"style": {"transform": "rotate(0deg)"}}} />

          </div>
        </div>

        <div className={Styles.middleBox}>

        </div>
      </div>

      

    </div>

    <h1 id='projects'>projects</h1>

    <h1 id='contact'>contact</h1>

    </div>
  )
}