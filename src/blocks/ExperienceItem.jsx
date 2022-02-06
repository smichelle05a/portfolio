import Job from '../components/experience/Job';
import xp from '../styles/experience.module.scss'

function ExperienceItem({exp}) {
  return (
    <div className={`d-flex fd-col jc-center p-5 rounded-l relative ${xp.timeline__item__description}`}>
    <h3 className={`txt-center fs-18 fw-800 border-bottom pb-1`}>
      {exp.company.toUpperCase()}
    </h3>
    {exp.job.map( (j, index) => <Job key={index} job={j}/>)}
    </div>
  );
}

export default ExperienceItem;
