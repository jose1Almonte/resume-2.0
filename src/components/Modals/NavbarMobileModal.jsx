// import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, HOME_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './NavbarMobileModal.module.css';
import { GiCancel } from "react-icons/gi";
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function NavbarMobileModal({showNavbar, setShowNavbar, scrollToSection}) {
  const {windowWidth} = useWindowWidth();
  
  const leftSideOptions = [
    {
      href: 'home',
      text: 'Home',
    },
    {
      href: 'about',
      text: 'About',
    },
    {
      href: 'projects',
      text: 'Projects',
    },
    {
      href: 'contact',
      text: 'Contact me',
    },
  ]
  
  return (

    <>
      <div className={` ${Styles.optionsBox} ${showNavbar ? Styles.appear : Styles.disappear}`}>
          
        <>
        <div className={Styles.closeNavbarContainer}>
        <button className = {Styles.closeNavbarButton} onClick={() => {setShowNavbar(!showNavbar)}}>
          {/* <span className = {Styles.closeNavbarText}> */}
            <GiCancel size={windowWidth/9} color='rgba(255,255,255,0.5)'/>
          {/* </span> */}
        </button>
        </div>

        <div className={Styles.optionsContainer}>
        {
          leftSideOptions.map((option, index) => (
                <button key={index} className={Styles.Link} onClick={() => {scrollToSection(option.href); setShowNavbar(!showNavbar)}}>
                  <li className={Styles.option}>
                      <span className={Styles.spanMobileNavbarOption}>{option.text}</span>
                  </li>
                </button>
            ))
          }
        </div>
        </>
        
      </div>
    </>
  )
}
