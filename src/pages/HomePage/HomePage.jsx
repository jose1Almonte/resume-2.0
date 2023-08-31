import { Carousel } from '../../components/Carousel/Carousel';
import Styles from './HomePage.module.css';
import {SKILLS_URL} from '../../constants/urls.js';
import { Heptagon } from '../../components/Poligons/Heptagon/Heptagon.jsx';
import Rhombus from '../../components/Poligons/Rhombus/Rhombus.jsx';
import me from '../../images/me.jpg'
import meAndMom from '../../images/meAndMom.jpg'
import meWithCompany from '../../images/meWithCompany.jpg'
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
    <div className={Styles.rowContainer}>
    <div className={Styles.row}>
      <Heptagon urlPage={SKILLS_URL} urlImage={me}/>
      <Rhombus urlPage={SKILLS_URL} urlImage={meAndMom}/>
      <Heptagon urlPage={SKILLS_URL} urlImage={meWithCompany}/>
    </div>
    </div>
    </div>
  )
}