import f from '../styles/footer.module.scss'
import { ImWhatsapp } from 'react-icons/im'
import { FaTelegramPlane, FaGithubAlt } from 'react-icons/fa'
import { SiMaildotru } from 'react-icons/si'
import { FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'
import FooterSocialItem from '../components/FooterSocialItem'

function Footer() {
  let socialNetworks = [
    {
      icon: <ImWhatsapp/>,
      text: 'Whatsapp',
      link: 'https://wa.me/5491159451640'
    },
    {
      icon: <FaTelegramPlane/>,
      text: 'Telegram',
      link: 'https://t.me/smichelle05a'
    },
    {
      icon: <SiMaildotru/>,
      text: 'Email',
      link: 'mailto:smichelle05a@gmail.com'
    },
    {
      icon: <FaGithubAlt/>,
      text: 'Github',
      link: 'https://github.com/smichelle05a'
    },
    {
      icon: <FiLinkedin/>,
      text: 'LinkedIn',
      link: 'http://linkedin.com/in/scarlet-albornoz'
    },
  ]
  return (
    <footer className={`${f.footer} bg-frost color-light fs-16 fw-400 d-flex jc-center ai-center`}>
      <div className='row'>
        <div className={`col col-12 d-flex jc-around ${f.footer__social}`}>
          {socialNetworks.map((network, index) => <FooterSocialItem social={network} key={index}/>)}
        </div>
      </div>
    </footer>
  )
}

export default Footer
