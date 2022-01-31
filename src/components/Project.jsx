/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { RiLinksFill } from 'react-icons/ri'
import { FaGithubAlt } from 'react-icons/fa'
import r from '../styles/portfolio.module.scss'

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
        <div className={`${r.image__overlay} d-flex ai-center jc-around`}>
          <Link href={repo.html_url}>
            <a target="_blank" className={`link circle d-flex jc-center ai-center br-transparent fs-24 ${r.image__overlay__link}`}>
              <FaGithubAlt/>
            </a>
          </Link>
            
          {repo.homepage ? (
            <Link href={repo.homepage}>
              <a target="_blank" className={`link circle d-flex jc-center ai-center br-transparent fs-24 ${r.image__overlay__link}`}>
                <RiLinksFill/>
              </a>
            </Link>
          ) : ""}
        </div>
      </div>
      <div className={`d-flex fd-col ai-center p-2`}>

        {repo.description ? <p>{repo.description}</p> : ""}

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
