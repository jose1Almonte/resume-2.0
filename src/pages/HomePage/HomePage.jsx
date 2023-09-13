import { Carousel } from '../../components/Carousel/Carousel';
import Styles from './HomePage.module.css';
import {EXPERIENCE_URL, SKILLS_URL} from '../../constants/urls.js';
import { Heptagon } from '../../components/Poligons/Heptagon/Heptagon.jsx';
import Rhombus from '../../components/Poligons/Rhombus/Rhombus.jsx';
import meOnAvila from '../../images/meOnAvila.jpg'
import rm1 from '../../images/rm1.png'
import carteleraCaracas from '../../images/carteleraCaracas.png'
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useAnimationContainer } from '../../hooks/useAnimationContainer';
import { FcCursor } from "react-icons/fc";
import { RxGlobe } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiFirebase } from "react-icons/di";
import github from "react-useanimations/lib/github";
import UseAnimations from 'react-useanimations';
import twitter from "react-useanimations/lib/twitter";
import ReactCurvedText from 'react-curved-text';

export function HomePage() {

  // const {windowWidth} = useWindowWidth();
  const {borderRadius} = useAnimationContainer();
  const {windowWidth} = useWindowWidth();
  const divisorNumber = 30;

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
    
    {/* <div className={Styles.carouselContainer}>
    <Carousel/>
    </div> */}

    {/* <h1 className={Styles.welcomeMessage}>{windowWidth}</h1> */}
    {/* <h1 className={Styles.welcomeMessage}>Welcome to my resume page</h1> */}
    
    {/* <div className={Styles.row}>
      <Heptagon urlPage={EXPERIENCE_URL} urlImage={meOnAvila}/>
      <Rhombus urlPage={'https://rick-and-morty-site-78b94.web.app/'} urlImage={rm1}/>
      <Heptagon urlPage={'https://microproyecto2-e4653.web.app/'} urlImage={carteleraCaracas}/>
    </div> */}
    {/* <div className={Styles.about} id='about'/> */}

    <div className={`${Styles.section} ${Styles.firstSection}`} id='about'>
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
              size={windowWidth/divisorNumber}/>
            </h2>
          </Link>
          <Link to='https://github.com/jose1Almonte' target='_blank' className={Styles.redirect}>
            <h2 
            className={Styles.linkedin_icon}
            onMouseEnter={() => {handleMouse('gitHub', true)}} 
            onMouseLeave={() => {handleMouse('gitHub', false)}}>
              <AiFillGithub 
              color={isHovered.gitHub ? 'white' : 'rgba(255,255,255,0.5)'} 
              size={windowWidth/divisorNumber}/>
            </h2>
          </Link>

        </div>
      </div>

      <div className={Styles.heroImg} style={{
        borderRadius: borderRadius,
      }}/>
    </div>

    <div className={`${Styles.section}`} id='skills'>
      <div className={Styles.techStack} style={{height: windowWidth/15}}>
        
        <div className="">
          <h1>Tech Stack</h1>
        </div>

        <div className="">
          <DiHtml5 color='#F06529' size={windowWidth/divisorNumber}/>
          <DiCss3 color='#264de4' size={windowWidth/divisorNumber}/>
          <DiJsBadge color='#F0DB4F' size={windowWidth/divisorNumber}/>
        </div>
        
        <div className="">
          <DiReact color='#61DBFB' size={windowWidth/divisorNumber}/>
          <DiFirebase color='#FFA611' size={windowWidth/divisorNumber}/>
        </div>
        
        {/* <UseAnimations animation={github} strokeColor='white' size={56} autoplay={true} loop={true} speed={0}/>
        <UseAnimations animation={twitter} strokeColor='white'  size={56} autoplay={true} loop={true} speed={0}/> */}

      </div>

      

  <ReactCurvedText width='300'
    height={300}
    cx={150}
    cy={150}
    rx={100}
    ry={100}
    startOffset={50}
    reversed={false}
    text='Front-End Web Developer'
    textProps={{"style": {"fontSize": "54"}}}
    textPathProps={{"fill": "#ffffff"}}
    tspanProps={{"dy": "44"}}
    ellipseProps={null}
    svgProps={{"style": {"transform": "rotate(0deg)"}}} />

    </div>

    <h1 id='experience'>experience</h1>

    <h1 id='contact'>contact</h1>

    </div>
  )
}