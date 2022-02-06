import Link from 'next/link';
import f from '../styles/footer.module.scss'
import Icon from './Icon';

function FooterSocialItem({social}) {
  return (
    <Link href={social.link}>
      <a className={`link rounded-l py-2 px-4 d-flex ai-center`} target='_blank'>
        <span className={``} ><Icon props={social.icon}/></span> 
        <span className={`${f.footer__social__text} pl-2`} >{social.text}</span>
      </a>
    </Link>
  );
}

export default FooterSocialItem;
