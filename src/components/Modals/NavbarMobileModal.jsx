// import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, HOME_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './NavbarMobileModal.module.css'

export default function NavbarMobileModal({showNavbar, setShowNavbar, scrollToSection}) {
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
        <button className = {Styles.closeNavbarButton} onClick={() => {setShowNavbar(!showNavbar)}}>
          <span className = {Styles.closeNavbarText}>Close Navbar</span>
        </button>
        {
            leftSideOptions.map((option, index) => (
              <li key={index} className={Styles.option}>
                <button className={Styles.Link} onClick={() => {scrollToSection(option.href); setShowNavbar(!showNavbar)}}>
                  <span className={Styles.spanMobileNavbarOption}>{option.text}</span>
                </button>
              </li>
            ))
          }
        </>
        
      </div>
    </>
  )
}
