import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { useWindowWidth } from '../../hooks/useWindowWidth';
import Styles from './AditionalInformation.module.css'
import { Link } from 'react-router-dom';

export default function AditionalInformation() {
    const {windowWidth} = useWindowWidth()
    const divisorNumber = 40;
    return (
        <>
            <Location windowWidth={windowWidth/divisorNumber}/>
            <Email windowWidth={windowWidth/divisorNumber}/>
        </>
    )
}

function Location({windowWidth}) {
    // const {windowWidth} = useWindowWidth()
  return (
    <Link target='_blank' to={'https://www.google.com/maps/place/Caracas,+Distrito+Capital,+Venezuela/data=!4m2!3m1!1s0x8c2a58adcd824807:0x93dd2eae0a998483?sa=X&ved=2ahUKEwi37oSN7K-BAxVU7rsIHYCJD9YQ8gF6BAgPEAA&ved=2ahUKEwi37oSN7K-BAxVU7rsIHYCJD9YQ8gF6BAgQEAI'} className={Styles.container}>
    <div className={Styles.topicBox} style={{width: windowWidth*1.5, height: windowWidth*1.5}}>
        <CiLocationOn color='white' size={windowWidth}/>
    </div>
    
    <div className={Styles.information}>
        <p className={Styles.title}>Location</p>
        <p className={Styles.description}>Caracas, Venezuela</p>
    </div>
    </Link>
  )
}

function Email({windowWidth}) {
    // const {windowWidth} = useWindowWidth()
  return (
    <Link to={'mailto:joseyv5@gmail.com'} className={Styles.container}>
    <div className={Styles.topicBox} style={{width: windowWidth*1.5, height: windowWidth*1.5}}>
        <MdEmail color='white' size={windowWidth}/>
    </div>
    
    <div className={Styles.information}>
        <p className={Styles.title}>Email</p>
        <p className={Styles.description}>joseyv5@gmail.com</p>
    </div>
    </Link>
  )
}

