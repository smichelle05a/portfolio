import Project from '../components/Project';
import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

function Portfolio() {
  const repos = useFetch()
  return (
    <Layout>
      {repos.map((r) => <Project repo = {r} key= {r.id} />)}
    </Layout>
  );
}

export default Portfolio;
