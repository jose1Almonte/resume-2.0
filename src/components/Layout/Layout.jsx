import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import NavbarMobileModal from '../Modals/NavbarMobileModal';

export function Layout() {


  return (
    <main>
        <Navbar/>
        <section className='body'>
            <Outlet/>
        </section>
    </main>
  )
}
