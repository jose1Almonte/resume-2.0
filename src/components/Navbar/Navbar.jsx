// import React from 'react'
import Styles from './Navbar.module.css'
import profile from '../../images/Profile.png'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { NavbarMobile } from '../../vectors/navBarMobile'
import NavbarMobileModal from '../Modals/NavbarMobileModal'
import { useState } from 'react'
import { useAnimationContainer } from '../../hooks/useAnimationContainer'

export default function Navbar() {

  const {borderRadius} = useAnimationContainer()

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

  const {windowWidth} = useWindowWidth()

  const [showNavbar, setShowNavbar] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 15 * window.innerHeight / 100; // Calcula 15vh en píxeles
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <>
      {windowWidth > 500 ? (
        <>
          <div className={Styles.NavbarContainer}>
            {/* <NavbarBackGround className={Styles.NavbarBackGround}/> */}

            <header className={Styles.navbarOptions}>
              <ul className={Styles.leftOptions}>

                {
                  leftSideOptions.map((option, index) => (
                    <li key={index}>
                      <button className={Styles.Link} onClick={() => scrollToSection(option.href)}>
                        <span>{option.text}</span>
                      </button>
                    </li>
                  ))
                }

              </ul>
              <button className={Styles.rigthOptions} style={{borderRadius: borderRadius}} onClick={() => scrollToSection('home')}>
                  <img src={profile}/>
              </button>
            </header>
          </div>

          {/* <div className={Styles.height15vh}></div> */}
        </>
      ) : (
        <div className={Styles.navbarMobile}>

          <button className={Styles.navbarButton} onClick={() => {setShowNavbar(!showNavbar);}}>
            <NavbarMobile className={Styles.vectorStyles} />
          </button>

          <NavbarMobileModal showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
        </div>
      ) 
      }
    </>
  )
}
