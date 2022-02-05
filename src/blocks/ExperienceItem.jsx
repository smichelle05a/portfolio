import Job from '../components/experience/Job';
import xp from '../styles/experience.module.scss'

function ExperienceItem({exp}) {
  return (
    <div className={`d-flex fd-col jc-center p-2 rounded-l relative ${xp.timeline__item__description}`}>
    <h3>
      {exp.company}
    </h3>
    {exp.job.map( (j, index) => <Job key={index} job={j}/>)}
    </div>
  );
}

export default ExperienceItem;
