import Head from 'next/head';
import Header from '../components/header';
import Form from '../components/form';
import Footer from '../components/footer';
import Store from '../components/Store';

export default function Home() {
  return (
    <Store>
      <div className="container">
        <Head>
          <title>Compare Pixels</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="content">
          <Header />
          <Form />
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
    </Store>
  );
}
