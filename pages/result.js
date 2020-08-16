import FooterCompare from '../components/FooterCompare';
export default function Result(props) {
  const getImageDimensions = () => {};
  return (
    <main>
      <div className="card">
        <div className="card-inner">
          <img
            style={{ display: 'None' }}
            src={props ? props.props.image : 'No image uploaded.'}
          />
          <iframe
            style={{ display: 'None' }}
            src={props ? props.props.website : 'No website provided.'}
          ></iframe>
          <div className="active"></div>
        </div>
      </div>
      <FooterCompare />
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .card {
          background-color: #fafbfb;
          width: 100vw;
          flex: 1 0 auto;
        }
        .card-inner {
          width: 736px;
          height: 516px;
          border-radius: 5px;
          box-shadow: 0 6px 50px 0 #cfd4d4;
          background-color: #ffffff;
          margin: 10vh auto;
        }
      `}</style>
    </main>
  );
}

Result.getInitialProps = (context) => {
  return {
    props: {
      image: context.query.image,
      website: context.query.website,
    },
  };
};
