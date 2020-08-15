import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Compare Pixels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer/>

      <style jsx>{`
        .wrapper {
          width: 1024px;
          height: 800px;
          border: 1px solid red;
        }
      `}</style>
    </div>
  )
}
