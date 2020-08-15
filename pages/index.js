import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Compare Pixels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <Header />
      </div>
      <Footer />

      <style jsx>{`
        .content {
          flex: 1 0 auto;
        }
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
