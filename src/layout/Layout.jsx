import Head from 'next/head'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'
import useScroll from '../hooks/useScroll';

function Layout({children}) {

  const scrollHandler = useScroll()

  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Scarlet Albornoz Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <title>Scarlet Albornoz Portfolio</title>
      </Head>

      <Header scroll={scrollHandler}/>

      <main className='color-light grow-1 container p-none d-flex fd-col jc-center'>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout