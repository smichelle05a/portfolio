import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GiTechnoHeart } from 'react-icons/gi';
import h from '../styles/header.module.scss';

function Header() {
  const router = useRouter()
  function isActive(route){
    route == router.pathname ? "active" : ""
  }
  const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setMenuOpen((p) => !p);
    };

  return (
    <header className={`${h.header} header bg-frost color-light px-3`}>
      <div className={`overflow-hidden h-100 d-flex ai-center jc-between ${h.header__content}`}>
        <Link href="/">
          <a className={`link fs-20 d-flex`} >
            <GiTechnoHeart/>
            </a>
        </Link>
        <nav className={`${h.header__content__nav} ${ menuOpen && size.width < 768 ? h.isMenu : ""} vh-100 w-100 d-flex fd-col jc-center ai-center fs-20`}>
          <Link href="/page-one" onClick={menuToggleHandler}>
            <a className={`link color-light rounded-l py-2 px-4`}>PageOne</a>
            </Link>
          <Link href="/page-two" onClick={menuToggleHandler}>
            <a className={`link color-light rounded-l py-2 px-4`}>PageTwo</a>
            </Link>
          <Link href="/page-three" onClick={menuToggleHandler}>
            <a className={`link color-light rounded-l py-2 px-4`}>PageThree</a>
            </Link>
          <Link href="/page-cta" onClick={menuToggleHandler}>
            <a className={`link color-light rounded-l py-2 px-4`}>PageCTA</a>
            </Link>
        </nav>
        

        <input type="checkbox" name="burger" id="burger" onClick={menuToggleHandler} hidden/>
        <label htmlFor="burger" className="burger-btn">
          <span className="burger burger-light"></span>
        </label>

      </div>
    </header>

);
}

export default Header;

