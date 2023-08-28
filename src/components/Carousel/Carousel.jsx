import React, { useEffect, useState } from 'react'
import {Motion, spring} from 'react-motion';
import Styles from './Carousel.module.css';
import { meAndMomPicture, mePicture, meWithCompanyPicture } from '../../constants/images';

export function Carousel() {
    const images = [
        mePicture,
        meAndMomPicture,
        meWithCompanyPicture,
      ]
        const [selectedIndex, setSelectedIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            const length = images.length - 1;
            
            if (selectedIndex == length) {
              setSelectedIndex(0);
            }else {
              setSelectedIndex(selectedIndex + 1)
            }
      
          }, 3000)
      
          return () => clearInterval(intervalId);
        }, [images.length, selectedIndex])

  return (
    <div className={Styles.imagesContainer}>

    {images.map((image, index) => (
      <Motion
        key={image}
        defaultStyle={{ translateX: selectedIndex === index ? 0 : 110 }}
        style={{ translateX: spring(selectedIndex === index ? 0 : (index + 1) === selectedIndex ? -103 : (index - 1) === selectedIndex ? 103   : index < selectedIndex ? -110 : 110)}}
      >
        {(style) => (
          <div
            className={selectedIndex === index ? Styles.imageSelected : Styles.imageNotSelected}
            style={{ transform: `translateX(${style.translateX}%)`}}
          
          >
          <img
            src={image}
            />
          <div className='gradientGreyLayer'/>
          </div>
            )}
      </Motion>
    ))}
  </div>
  )
}
