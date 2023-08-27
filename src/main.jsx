import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { HomePage } from './pages/HomePage/HomePage.jsx'
import {HomePage} from './pages/HomePage/HomePage.jsx'
import {HOME_URL, SKILLS_URL, ABOUT_URL, EXPERIENCE_URL, CONTACT_URL} from './constants/urls.js'
import { SkillsPage } from './pages/SkillsPage/SkillsPage'
import AboutMePage from './pages/AboutMePage/AboutMePage'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ContactMePage from './pages/ContactMePage/ContactMePage'
import { Layout } from './components/Layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>

          <Route path={HOME_URL} element = {<HomePage/>}/>
          <Route path={SKILLS_URL} element = {<SkillsPage/>}/>
          <Route path={ABOUT_URL} element = {<AboutMePage/>}/>
          <Route path={EXPERIENCE_URL} element = {<ExperiencePage/>}/>
          <Route path={CONTACT_URL} element = {<ContactMePage/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
