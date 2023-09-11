import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import NavbarMobileModal from '../Modals/NavbarMobileModal';
import Styles from './Layout.module.css'

export function Layout() {

  return (
    <main>
        <Navbar/>
        <section className={Styles.body}>
            <Outlet/>
        </section>
    </main>
  )
}
