/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Layout from '../layout/Layout'
import home from '../styles/home.module.scss'

function Home() {
  return (
    <Layout>
      <div className={`row p-none ${home.hero}`}>
        <div className={`col d-flex fd-col ai-center h-100 jc-center ${home.hero__title}`}>
          <h2 className="color-primary-lighter fs-16">Hi, my name is</h2>
          <h1 className="color-highlight fs-36"> Scarlet Albornoz</h1>
          <h2 className="color-primary-lighter fs-16">
            Welcome to my Portfolio
          </h2>
        </div>
        <div className={`col p-none d-flex`}>
          <img src='/assets/img/landing-photo.png' alt="Scarlet Albornoz" className={`${home.hero__img} p-none`} />
        </div>
      </div>
    </Layout>
  )
}

export default Home