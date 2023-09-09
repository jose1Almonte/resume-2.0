import meOnAvila from '../../images/meOnAvila.jpg';
import meAndMom from '../../images/meAndMom.jpg';
import { TitleDescription } from '../../components/TitleDescription/TitleDescription';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import Styles from './AboutMePage.module.css'
import {useState, useEffect} from 'react'
import { useAnimationContainer } from '../../hooks/useAnimationContainer';

export default function AboutMePage() {

  const whoIAmText = `I am a university student at UNIMET (Universidad Metropolitana) in Venezuela, pursuing a degree in Systems Engineering. Currently, I am in my 9th out of 12 trimesters. I have a strong interest in the world of web and mobile development and I am eager to gain practical experience in this field to enhance my skills, knowledge, and professional growth.

  I am a proactive individual who is always willing to learn new technologies, methodologies, and best practices. I have a genuine passion for understanding concepts thoroughly, and I am not hesitant to ask questions or seek clarification whenever needed.
  
  One of my greatest strengths is my love for the process itself rather than just the end result. I take pleasure in my work and actively engage in every task, striving for excellence. I am committed to delivering high-quality results and providing exceptional service, ensuring that external factors, procrastination, or personal issues never affect my work.
  
  In conclusion, by contacting me, you will meet a disciplined and respectful person who is eager to learn and contribute to your project. I am ready and waiting for your call. Thank you for taking the time to learn more about me.`;

  const hobbiesText = `In order to continuously improve myself, I enjoy reading books and listening to audiobooks on a wide range of topics. This habit allows me to expand my knowledge, enhance my personal growth, strengthen my relationships, and gain new perspectives on the world and my own experiences, whether they are in the present, future, or past.

  Additionally, I find solace in physical training as a means to alleviate the challenges that weigh on my mind. Taking care of my body not only benefits my overall well-being but also provides a valuable outlet for stress relief. Furthermore, I occasionally indulge in playing video games, as it allows me to unwind and reward myself after a productive day of hard work.`

  const {windowWidth} = useWindowWidth();

  const {borderRadius} = useAnimationContainer()
  // const [borderRadius, setBorderRadius] = useState('60% 40% 30% 70%/60% 30% 70% 40%');

  // useEffect(() => {
  //   const borderRadiusValues = [
  //     '60% 40% 30% 70%/60% 30% 70% 40%',
  //     '40% 60% 70% 30%/30% 70% 40% 60%',
  //     '30% 70% 60% 40%/70% 30% 40% 60%',
  //     '70% 30% 40% 60%/60% 40% 70% 30%',
  //     // Add more borderRadius values as desired
  //   ];

  //   let currentIndex = 0;

  //   const intervalId = setInterval(() => {
  //     setBorderRadius(borderRadiusValues[currentIndex]);
  //     currentIndex = (currentIndex + 1) % borderRadiusValues.length;
  //   }, 5000); // Cambia cada 5 segundos (ajusta este valor según tus preferencias)

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
    {/* <div className={Styles.heroImg} style={{
      borderRadius: borderRadius,
    }}></div> */}
    <TitleDescription imageURL={windowWidth > 210 ? meOnAvila : meAndMom} paragraphText={whoIAmText} titleText={'Who I am?'}/>
    <TitleDescription imageURL={windowWidth > 210 ? meOnAvila : meAndMom} paragraphText={hobbiesText} titleText={'Hobbies'}/>

    {windowWidth}
    </>
  )
}
