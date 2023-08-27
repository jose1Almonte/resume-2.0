import Styles from './ExperiencePoints.module.css'
import ListPoint from '../ListPoint/ListPoint';

export default function ExperiencePoints({title, points}) {

    return (
    <>
    <h1>{title}</h1>
      <div className={Styles.scrollContainer}>
        {points.map((point) => (
          <>
          <br/>
          <ListPoint coursePoint={point}/>
          </>
        ))}
        <br/>
      </div>
    </>
  )
}
