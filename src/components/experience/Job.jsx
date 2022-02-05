import JobDescription from './JobDescription';

function Job({job}) {
  return (
    <div>
      <p>
        {job.occupation} | {job.from} - {job.to}
      </p>
      {job.description.map( (desc, index) => <JobDescription desc={desc} key={index}/>)}
    </div>
  );
}

export default Job;
