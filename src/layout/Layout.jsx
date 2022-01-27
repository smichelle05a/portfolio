import Head from 'next/head'
import Header from '../components/Header'

function Layout({children}) {
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Scarlet Albornoz Portfolio</title>
      </Head>

      <Header/>

      <main className='color-light grow-1 container'>
        {children}
      </main>
      <footer className='color-light'>
        Footer
      </footer>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </>
  )
}

export default Layout