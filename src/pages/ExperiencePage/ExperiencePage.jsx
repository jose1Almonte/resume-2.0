import { useExperiencePoints } from '../../hooks/useCoursePoints';
import ExperiencePoints from '../../components/ExperiencePoints/ExperiencePoints';

export default function ExperiencePage() {
  
  const {experiencePoints} = useExperiencePoints();

  return (
    <p>

      <ExperiencePoints title={'Courses'} points={experiencePoints.coursePoints}/>
      <ExperiencePoints title={'Academic travel'} points={experiencePoints.academyPoints}/>

    {/* <h1>Academic travel</h1> */}

    </p>
  )
}
