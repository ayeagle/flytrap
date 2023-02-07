import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from '@components/LandingPage'
import styles from './index.module.css'
import Screenshots from "@components/Screenshots"



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.master_container}>
        <img src='Media/logos/logo3.png' style={{ width: "15vw", height: "auto" }} />
        <h1>Flytrap </h1>
        <h3>The all-in-one extension to make email signups easier, safer, and more accountable.</h3>
        <Screenshots />

        <button className={styles.chrome_button}>Download on Chrome Store</button>        <p className="description">
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
