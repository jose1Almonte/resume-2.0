import profile from '../../images/Profile.png'
import Styles from './Home.module.css'
import { FcCursor } from "react-icons/fc";
import { RxGlobe } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useAnimationContainer } from '../../hooks/useAnimationContainer';

export default function Home() {
    
    const {windowWidth} = useWindowWidth()
    const {borderRadius} = useAnimationContainer();
    const divisorNumberForIcons = windowWidth <= 500 ? 10 : 30;

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
    <>
    <div className={`${"section"} ${Styles.firstSection}`} id='home'>
      
      <div className={Styles.firstElement}>
        <h1>Front-End React Developer <FcCursor size={windowWidth/divisorNumberForIcons}/> </h1>
        <h2>Hi, I&apos;m José Almonte. A passionate Front-end React Developer based in Caracas, Venezuela. <RxGlobe color='#61DBFB'/></h2>
       
        <div>
          <Link to='https://www.linkedin.com/in/jos%C3%A9-antonio-almonte-hern%C3%A1ndez-1a32b528a/' target='_blank'>
            <h2 
            className={Styles.linkedin_icon}
            onMouseEnter={() => {handleMouse('linkedIn', true)}} 
            onMouseLeave={() => {handleMouse('linkedIn', false)}}>
              <CiLinkedin 
              color={isHovered.linkedIn ? '#0e76A8' : 'rgba(255,255,255,0.5)'} 
              size={windowWidth/divisorNumberForIcons}/>
            </h2>
          </Link>
          <Link to='https://github.com/jose1Almonte' target='_blank'>
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
      }}>
      <img src={profile}/>
      </div>
    </div>
    </>
  )
}
