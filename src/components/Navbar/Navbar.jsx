// import React from 'react'
import { NavbarBackGround } from '../../vectors/NavbarBackGround'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {HOME_URL, SKILLS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL} from '../../constants/urls.js'
import {mePicture} from '../../constants/images.js'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { NavbarMobile } from '../../vectors/navBarMobile'

export default function Navbar() {

  const leftSideOptions = [
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

  const {windowWidth} = useWindowWidth()

  return (
    <>
      {windowWidth > 500 ? (
        <>
          <div className={Styles.NavbarContainer}>
            <NavbarBackGround className={Styles.NavbarBackGround}/>

            <header className={Styles.navbarOptions}>
              <ul className={Styles.leftOptions}>

                {
                  leftSideOptions.map((option, index) => (
                    <li key={index}>
                      <Link to={option.href} className={Styles.Link}>
                        <span>{option.text}</span>
                      </Link>
                    </li>
                  ))
                }

              </ul>

              <Link to={HOME_URL} className={Styles.rigthOptions}>
                  <img src={mePicture}/>
              </Link>
            </header>

          </div>
        </>
      ) : (
        <div className={Styles.navbarMobile}>
          <button>
            <NavbarMobile />

          </button>
        </div>
      ) 
      }
    </>
  )
}
