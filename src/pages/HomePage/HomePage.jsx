import { Carousel } from '../../components/Carousel/Carousel';
import Styles from './HomePage.module.css';
import {EXPERIENCE_URL, SKILLS_URL} from '../../constants/urls.js';
import { Heptagon } from '../../components/Poligons/Heptagon/Heptagon.jsx';
import Rhombus from '../../components/Poligons/Rhombus/Rhombus.jsx';
import meOnAvila from '../../images/meOnAvila.jpg'
import rm1 from '../../images/rm1.png'
import carteleraCaracas from '../../images/carteleraCaracas.png'
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useAnimationContainer } from '../../hooks/useAnimationContainer';


export function HomePage() {

  // const {windowWidth} = useWindowWidth();
  const {borderRadius} = useAnimationContainer();
  return (
    <div className={Styles.giantBox}>
    
    {/* <div className={Styles.carouselContainer}>
    <Carousel/>
    </div> */}

    {/* <h1 className={Styles.welcomeMessage}>{windowWidth}</h1> */}
    {/* <h1 className={Styles.welcomeMessage}>Welcome to my resume page</h1> */}
    
    {/* <div className={Styles.row}>
      <Heptagon urlPage={EXPERIENCE_URL} urlImage={meOnAvila}/>
      <Rhombus urlPage={'https://rick-and-morty-site-78b94.web.app/'} urlImage={rm1}/>
      <Heptagon urlPage={'https://microproyecto2-e4653.web.app/'} urlImage={carteleraCaracas}/>
    </div> */}

    <div className={Styles.section} id='about'>
      <div className={Styles.firstElement}>
        <h1>Front-End React Developer </h1>
      </div>
      
      <div className={Styles.heroImg} style={{
        borderRadius: borderRadius,
      }}/>
      {/* <h1>hola</h1> */}
    </div>

    <h1 id='skills'>skills</h1>

    <h1 id='experience'>experience</h1>

    <h1 id='contact'>contact</h1>
    </div>
  )
}