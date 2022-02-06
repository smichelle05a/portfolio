import JobDescription from './JobDescription';
import xp from '../../styles/experience.module.scss'

function Job({job}) {
  return (
    <div>
      <div className='d-flex fd-col jc-center py-2'>
        <p className='fw-600 pb-1'> {job.occupation.toUpperCase()} </p>
        <p> {job.from} - {job.to} </p>
      </div>
      <div>
        {job.description.map( (desc, index) => <JobDescription desc={desc} key={index}/>)}
      </div>
    </div>
  );
}

export default Job;
