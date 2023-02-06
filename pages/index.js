import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from '@components/LandingPage'
import styles from './index.module.css'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.master_container}>
        {/* <Header title="Welcome to my app!" /> */}
        <LandingPage/>
        <p className="description">
          {/* Get started by editing <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
