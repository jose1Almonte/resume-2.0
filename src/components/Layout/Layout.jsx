import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

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
