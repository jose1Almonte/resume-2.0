import React from 'react'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import Styles from './About.module.css'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiFirebase } from "react-icons/di";
import { FcCommandLine } from "react-icons/fc";
import ReactCurvedText from 'react-curved-text';

export function About() {
    const {windowWidth} = useWindowWidth();
    const divisorNumberForCircle = windowWidth > 500 ? 7.7 : 5;
    const divisorNumberForIcons = windowWidth > 500 ? 30 : 15;
    const textCircleSizeDivisor = windowWidth > 500 ? 45 : 30;

  return (
    <div className={`${"section"} ${Styles.margin15top}`} id='about'>
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
        <div className={`${Styles.middleBox} ${Styles.displayFlex}`}>

          <div className={Styles.desktopContainer}/>
          <div className={Styles.rotating_vector} style={{width: windowWidth/(divisorNumberForCircle - 0.1)}}>
          <FcCommandLine className={Styles.comandLineIcon} size={(windowWidth/divisorNumberForIcons)+10}/>
          <ReactCurvedText 
            width= {windowWidth/divisorNumberForCircle}
            height={windowWidth/divisorNumberForCircle}
            cx={(windowWidth/divisorNumberForCircle)/2}
            cy={(windowWidth/divisorNumberForCircle)/2}
            rx={(windowWidth/divisorNumberForCircle)/3}
            ry={(windowWidth/divisorNumberForCircle)/3}
            startOffset={0}
            reversed={true}
            text='Front-End Web Developer'
            textProps={{"style": {"fontSize": windowWidth/textCircleSizeDivisor, 'fontWeight': 'bold'}}}
            textPathProps={{"fill": "rgba(255,255,255,0.92)"}}
            tspanProps={{"dy": (windowWidth/divisorNumberForCircle)/1000}}
            ellipseProps={null}
            svgProps={{"style": {"transform": "rotate(0deg)"}}} />

          </div>
        </div>

        <div className={`${Styles.middleBox} ${Styles.centerAll}`}>
          <p className={`${"title"} ${Styles.textJustified} ${Styles.marginBottom} ${Styles.marginHorizontal}`}>ABOUT ME</p>
          <p className={`${"subtitle"} ${Styles.marginVertical} ${Styles.marginHorizontal}`}>A dedicated Front-end Developer
based in Caracas, Venezuela 📍</p>
          <p className={`${"description"} ${Styles.marginTop} ${Styles.marginHorizontal}`}>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>

        </div>
      </div>
    </div>
  )
}
