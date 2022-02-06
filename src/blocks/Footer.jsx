import f from '../styles/footer.module.scss'
import FooterSocialItem from '../components/FooterSocialItem'

function Footer() {
  let socialNetworks = [
    {
      icon: 'whatsapp',
      text: 'Whatsapp',
      link: 'https://wa.me/5491159451640'
    },
    {
      icon: 'telegram',
      text: 'Telegram',
      link: 'https://t.me/smichelle05a'
    },
    {
      icon: 'mail',
      text: 'Email',
      link: 'mailto:smichelle05a@gmail.com'
    },
    {
      icon: 'github',
      text: 'Github',
      link: 'https://github.com/smichelle05a'
    },
    {
      icon: 'linkedin',
      text: 'LinkedIn',
      link: 'http://linkedin.com/in/scarlet-albornoz'
    },
  ]
  return (
    <footer className={`${f.footer} bg-frost color-light fs-16 fw-400 d-flex jc-center ai-center`}>
      <div className='row'>
        <div className={`col col-12 fs-20 d-flex jc-center ${f.footer__social}`}>
          {socialNetworks.map((network, index) => <FooterSocialItem social={network} key={index}/>)}
        </div>
      </div>
    </footer>
  )
}

export default Footer
