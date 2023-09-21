import UseAnimations from 'react-useanimations';
import github from "react-useanimations/lib/github";
import loading2 from "react-useanimations/lib/loading2";
import Styles from './ProjectInfo.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { FcEnteringHeavenAlive } from "react-icons/fc";
export function ProjectInfo({siteUrl}) {

  const {windowWidth} = useWindowWidth();

  const [moused, setMoused] = useState({
    gitHubMoused: false,
    loadingMoused: false,
  })

  const handleOnChange = (name, value) => {
    setMoused({
      ...moused,
      [name]: value,
    })
  }

  const divisor = windowWidth > 500 ? 50: 12;

  return (
    <>
    <Link
    onMouseOver={()=>{handleOnChange('gitHubMoused', true)}}
    onMouseLeave={() => {handleOnChange('gitHubMoused', false)}}
    to={'https://github.com/jose1Almonte/Rick-and-Morty-site'} 
    target='_blank' 
    className={Styles.text}>
        Code
        <UseAnimations 
        animation={github} 
        strokeColor=
        {
          moused.gitHubMoused ? 'rgba(255,255,255,0.5)': 'white'
        } 
        size={windowWidth/divisor} 
        autoplay={true} 
        loop={true} 
        speed={0}/>
    </Link>
    <Link 
      onMouseOver={()=>{handleOnChange('loadingMoused', true)}}
      onMouseLeave={() => {handleOnChange('loadingMoused', false)}}
    to={siteUrl} 
    target='_blank' 
    className={Styles.text}>
        Live Demo

        <FcEnteringHeavenAlive color={
          moused.loadingMoused ? 'rgba(255,255,255,0.5)' : 'white'
        } size={windowWidth/divisor}/>
        {/* <UseAnimations 
        animation={loading2} 
        strokeColor=
        {
          moused.loadingMoused ? 'rgba(255,255,255,0.5)' : 'white'
        } 
        fillColor=
        {
          moused.loadingMoused ? 'rgba(255,255,255,0.5)' : 'white'
        } 
        size={windowWidth/divisor} 
        autoplay={true} 
        loop={true} 
        speed={0}/> */}
    </Link>
    </>
  )
}
