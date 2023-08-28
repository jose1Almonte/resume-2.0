// import React from 'react'
import { NavbarBackGround } from '../../vectors/NavbarBackGround'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {HOME_URL, SKILLS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL} from '../../constants/urls.js'
import {mePicture} from '../../constants/images.js'
import { useWindowWidth } from '../../hooks/useWindowWidth'

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

  const {windowWidth} = useWindowWidth();

  return (
    <div className='NavbarContainer'>
      {windowWidth > 500 ? (
        <>
          <NavbarBackGround className={'NavbarBackGround'}/>

          <header className="navbarOptions">
            <ul className="leftOptions">

              {
                leftSideOptions.map((option, index) => (
                  <li key={index}>
                    <Link to={option.href} className='Link'>
                      <span>{option.text}</span>
                    </Link>
                  </li>
                ))
              }

            </ul>

            <Link to={HOME_URL} className='rigthOptions'>
                <img src={mePicture}/>
            </Link>
          </header>
        </>
      ) : (
        <>
        <h1>NavBar phone not done yet, please use your desktop</h1>
        </>
      )}


    </div>
  )
}
