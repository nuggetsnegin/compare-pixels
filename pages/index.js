import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Compare Pixels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
