import Link from 'next/link';
import f from '../styles/footer.module.scss'

function FooterSocialItem({social}) {
  return (
    <Link href={social.link}>
      <a className='link' target='_blank'>
        <span className={`${f.footer__social__icon}`} >{social.icon}</span> 
        <span className={`${f.footer__social__text}`} >{social.text}</span>
      </a>
    </Link>
  );
}

export default FooterSocialItem;
