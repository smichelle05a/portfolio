import Project from '../components/Project';
import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';
import repo from '../styles/portfolio.module.scss'

function Portfolio() {
  const repos = useFetch()
  return (
    <Layout>
      <h2 className='fs-36 py-3 txt-center'>Portfolio</h2>
      <div className={`p-3 row jc-center ac-center gap-3 fw-wrap ${repo.projects}`}>
        {repos.map((r) => <Project repo = {r} key= {r.id} />)}
      </div>
    </Layout>
  );
}

export default Portfolio;
