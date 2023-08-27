import { Link } from 'react-router-dom';
import Styles from './ListPoint.module.css';

export default function ListPoint({coursePoint}) {
  return (
    <li>
        <Link className={Styles.linkStyles} target='_blank' to={coursePoint.titleRef}>
        {coursePoint.title}  
        </Link>
        &nbsp;{coursePoint.description} &nbsp;
        <Link 
        className={Styles.linkStyles}
        to={coursePoint.descriptionRef} 
        target='_blank' 
        download={coursePoint.downloadName}>
          {coursePoint.downloadText}
          </Link>
    </li>
  )
}
