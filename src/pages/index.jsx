/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import BgAnimation from '../components/BgAnimation'
import Layout from '../layout/Layout'
import home from '../styles/home.module.scss'

function Home() {
  return (
    <Layout>
        <div className={`col d-flex fd-col ai-center h-100 jc-center grow-1 ${home.hero__title}`}>
          <h2 className="color-primary-lighter fs-24">Hi, my name is</h2>
          <h1 className="color-highlight fs-56 txt-center my-3"> Scarlet Albornoz</h1>
          <h2 className="color-primary-lighter fs-24">
            Frontend Developer
          </h2>
        </div>
      <BgAnimation/>
    </Layout>
  )
}

export default Home