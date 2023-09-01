import { Carousel } from '../../components/Carousel/Carousel';
import Styles from './HomePage.module.css';
import {EXPERIENCE_URL, SKILLS_URL} from '../../constants/urls.js';
import { Heptagon } from '../../components/Poligons/Heptagon/Heptagon.jsx';
import Rhombus from '../../components/Poligons/Rhombus/Rhombus.jsx';
import meOnAvila from '../../images/meOnAvila.jpg'
import rm1 from '../../images/rm1.png'
import carteleraCaracas from '../../images/carteleraCaracas.png'
import { useWindowWidth } from '../../hooks/useWindowWidth';


export function HomePage() {

  // const {windowWidth} = useWindowWidth();

  return (
    <div className={Styles.giantBox}>
    
    <div className={Styles.carouselContainer}>
    <Carousel/>
    </div>

    {/* <h1 className={Styles.welcomeMessage}>{windowWidth}</h1> */}
    <h1 className={Styles.welcomeMessage}>Welcome to my resume page</h1>
    
    <div className={Styles.row}>
      <Heptagon urlPage={EXPERIENCE_URL} urlImage={meOnAvila}/>
      <Rhombus urlPage={'https://rick-and-morty-site-78b94.web.app/'} urlImage={rm1}/>
      <Heptagon urlPage={'https://microproyecto2-e4653.web.app/'} urlImage={carteleraCaracas}/>
    </div>
    </div>
  )
}