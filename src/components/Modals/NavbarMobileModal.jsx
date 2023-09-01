// import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_URL, CONTACT_URL, EXPERIENCE_URL, HOME_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './NavbarMobileModal.module.css'

export default function NavbarMobileModal({showNavbar, setShowNavbar}) {
  const leftSideOptions = [
    {
      href: HOME_URL,
      text: 'Home',
    },
    {
      href: ABOUT_URL,
      text: 'About me',
    },
    {
      href: SKILLS_URL,
      text: 'skills',
    },
    {
      href: EXPERIENCE_URL,
      text: 'Experience',
    },
    {
      href: CONTACT_URL,
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
                <Link to={option.href} className={Styles.link} onClick={() => {setShowNavbar(!showNavbar)}}>
                  <span className={Styles.spanMobileNavbarOption}>{option.text}</span>
                </Link>
              </li>
            ))
          }
        </>
        
      </div>
    </>
  )
}
