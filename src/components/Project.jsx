/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import r from '../styles/portfolio.module.scss'
import Icon from './Icon';

function Project({repo}) {
  let dateFormat = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }

  return (
    <div className={`col p-none card fd-col border color-light fs-16 ${r.project}`} >
      <div className={`${r.image}`}>
        <img src={`/assets/img/${repo.homepage ? `${repo.name}.png`: 'javascript-code.jpg'}`} alt={`${repo.name}`} className={`${r.image__photo}`} />
        <div className={`${r.image__overlay} d-flex ai-center jc-around p-1 gap-3`}>
          <Link href={repo.html_url}>
            <a target="_blank" className={`link d-flex jc-center ai-center br-transparent fs-24 bg-light color-primary-dark w-100 rounded-s p-1 ${r.image__overlay__link}`}>
              <Icon props='github'/>
            </a>
          </Link>
            
          {repo.homepage ? (
            <Link href={repo.homepage}>
              <a target="_blank" className={`link d-flex jc-center ai-center br-transparent fs-24 bg-light color-primary-dark w-100 rounded-s p-1 ${r.image__overlay__link}`}>
              <Icon props='link'/>
              </a>
            </Link>
          ) : ""}
        </div>
      </div>
      <div className={`d-flex fd-col ai-center grow-1 jc-between p-2`}>

      <p className='w-100 txt-center'>{repo.description ? repo.description : 'No description found'}</p>

        <div className="d-flex ai-center jc-around w-100">
          <div className="col d-flex fd-col ai-center">
            <p className='fs-16 fw-600'>Created</p>
            <p>{new Date(repo.created_at).toLocaleDateString(undefined, dateFormat)}</p>
          </div>
          <div className="col d-flex fd-col ai-center">
            <p className='fs-16 fw-600'>Last Updated</p>
            <p>{new Date(repo.updated_at).toLocaleDateString(undefined, dateFormat)}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
