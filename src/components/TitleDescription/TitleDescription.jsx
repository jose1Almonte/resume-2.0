// import React from 'react'
import { Paragraphs } from '../Paragraphs/Paragraphs'
import Styles from './TitleDescription.module.css'

export function TitleDescription({titleText, imageURL, paragraphText}) {
  return (
    <>
      <h1>{titleText}</h1>
      <div className={Styles.imageBox}>
        <img src={imageURL}/>
        <div className="blackLayer70"/>
        <Paragraphs bigParagraphStyles={Styles.paragraph} paragraphText={paragraphText}/>
      </div>
    </>
  )
}
