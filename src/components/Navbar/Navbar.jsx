import React from 'react'
import { NavbarBackGround } from '../../vectors/NavbarBackGround'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {HOME_URL, SKILLS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL} from '../../constants/urls.js'

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

  return (
    <div className='NavbarContainer'>
      <NavbarBackGround className={'NavbarBackGround'}/>

      <header className="navbarOptions">
        <ul className="leftOptions">

          {
            leftSideOptions.map((option) => (
              <li>
                <Link to={option.href} className='Link'>
                  <span>{option.text}</span>
                </Link>
              </li>
            ))
          }

        </ul>

        <Link to={HOME_URL} className='rigthOptions'>
            <img
            src='src\images\me.jpg'
            />
        </Link>
      </header>

    </div>
  )
}
