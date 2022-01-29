import Link from 'next/link';

function HeaderLink({page, cb}) {
  return (
    <Link href={page.link} onClick={cb}>
      <a className='link color-light rounded-l py-2 px-4'>
        {page.text}
      </a>
    </Link>
  );
}

export default HeaderLink;
