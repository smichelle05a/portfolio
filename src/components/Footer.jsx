import f from '../styles/footer.module.scss'
import { ImWhatsapp } from 'react-icons/im'
import { FaTelegramPlane, FaGithubAlt } from 'react-icons/fa'
import { SiMaildotru } from 'react-icons/si'
import { FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={`${f.footer} bg-frost color-light fs-16 fw-400 d-flex jc-center ai-center`}>
      <div className='row'>
        <div className={`col col-6 ${f.social} d-flex jc-around`}>
          <Link href='https://wa.me/5491159451640'>
            <a className='link' target='_blank'>
              <ImWhatsapp />
            </a>
          </Link>
          <Link href='https://t.me/smichelle05a'>
            <a className='link' target='_blank'>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href='mailto:smichelle05a@gmail.com'>
            <a className='link' target='_blank'>
              <SiMaildotru />
            </a>
          </Link>
          <Link href='https://github.com/smichelle05a'>
            <a className='link' target='_blank'>
              <FaGithubAlt />
            </a>
          </Link>
          <Link href='http://linkedin.com/in/scarlet-albornoz'>
            <a className='link' target='_blank'>
              <FiLinkedin />
            </a>
          </Link>
        </div>
        <div className={`col col-6 d-flex fd-col ${f.nav}`}>
          <Link href='/page-one'>
            <a className={`link`}>PageOne</a>
          </Link>
          <Link href='/page-two'>
            <a className={`link`}>PageTwo</a>
          </Link>
          <Link href='/page-three'>
            <a className={`link`}>PageThree</a>
          </Link>
          <Link href='/page-cta'>
            <a className={`link`}>PageCTA</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
