import Styles from './ProjectCard.module.css'
import background from '../../images/capturaDePrueba.png'
import { BiBadgeCheck } from "react-icons/bi";
import { TechBox } from '../TechBox/TechBox';
import { ProjectInfo } from '../ProjectInfo/ProjectInfo';

export default function ProjectCard({leftToRight, siteUrl}) {
  return (
    <div className={`${Styles.cardContainer} ${Styles.displayFlex}`}>
        {leftToRight ?
        (
          <>
          <LeftSide/>
          <RighSide siteUrl={siteUrl}/>
          </>
        ) : (
          <>
          <RighSide siteUrl={siteUrl}/>
          <LeftSide/>
          </>
        )

        }
        
    </div>
  )
}

function LeftSide() {
  return (
    <>
      <div className={`${Styles.projectImage}`} style={{backgroundImage: `url(${background})`}}/>
    </>
  )
}

function RighSide({siteUrl}) {
  return (
    <>
        <div className={`${Styles.descriptionContainer}`} >
            <p className={Styles.projectName}>
              Rick And Morty <span className={Styles.projectDate}>(February 2023)</span> <BiBadgeCheck color='green'/>
            </p>

            <p className={`${Styles.projectDescription}`}>
            {/* A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars. */}
            A rick & morty webiste is an online platform that allows users to know the actual information about the r&m characters. The website provides an interface for navigate, see the actual charactes states, etc.
            </p>

            <div className={Styles.methodologiesBox}>
              <TechBox text={'React.js'}/>
              <TechBox text={'Vite'}/>
            </div>

            <div className={Styles.methodologiesBox}>
              <ProjectInfo siteUrl={siteUrl}/>
            </div>
        </div>
    </>
  )
}