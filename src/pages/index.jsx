/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import BgAnimation from '../components/BgAnimation'
import Layout from '../layout/Layout'
import home from '../styles/home.module.scss'
import Link from 'next/link';

function Home() {
  return (
    <Layout>
        <div className={`d-flex fd-col ai-center h-100 jc-center grow-1 ${home.hero__title}`}>
          <h2 className="color-primary-lighter fs-24">Hi, my name is</h2>
          <h1 className="color-highlight fs-56 txt-center my-3"> Scarlet Albornoz</h1>
          <h2 className="color-primary-lighter fs-24">
            Frontend Developer
          </h2>
          <div className="d-flex gap-3 py-5">
            <Link href="/about">
              <a className={`link color-light rounded-l py-2 px-4 bg-primary-light fs-14`}>
                About Me
              </a>
            </Link>
            <Link href="/contact">
              <a className={`link color-light rounded-l py-2 px-4 bg-primary-light fs-14`}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      <BgAnimation/>
    </Layout>
  )
}

export default Home