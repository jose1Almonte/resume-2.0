import { useExperiencePoints } from '../../hooks/useCoursePoints';
import ExperiencePoints from '../../components/ExperiencePoints/ExperiencePoints';

export default function ExperiencePage() {
  
  const {experiencePoints} = useExperiencePoints();

  return (
    <p>
      <ExperiencePoints title={'My Own Projects (I participated)'} points={experiencePoints.myOwnProjects}/>
      <ExperiencePoints title={'Courses'} points={experiencePoints.coursePoints}/>
      <ExperiencePoints title={'Academic travel'} points={experiencePoints.academyPoints}/>

    </p>
  )
}
