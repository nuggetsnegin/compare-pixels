import { useState } from 'react';
import Link from 'next/link';
import FooterCompare from '../components/FooterCompare';
export default function Result(props) {
  const [imageDimension, setImageDimension] = useState({});

  const getImageDimensions = () => {
    const imageSize = new Image();
    imageSize.src = props.props.image;
    imageSize.onload = function (e) {
      setImageDimension({ height: imageSize.height, width: imageSize.width });
    };
  };

  getImageDimensions();
  const [showDesign, setShowDesign] = useState(true);

  const toggleVisibleContainer = (containerName) => {
    if (containerName === 'design') {
      setShowDesign(true);
    } else {
      setShowDesign(false);
    }
  };
  const compareThemes = {
    show: {
      display: 'block',
      opacity: 1,
      transition: '0s linear 0s, opacity 3000ms',
    },
    hide: {
      display: 'none',
      opacity: 0,
      transition: '0s linear 300ms, opacity 3000ms',
    },
  };

  return (
    <main>
      <Link href="/">
        <a className="start-over">Start Over</a>
      </Link>
      <div className="card">
        <div className="card-inner">
          <img
            style={showDesign ? compareThemes.show : compareThemes.hide}
            src={props ? props.props.image : 'No image uploaded.'}
          />

          <iframe
            height={imageDimension.height + 'px'}
            width={imageDimension.width + 'px'}
            style={!showDesign ? compareThemes.show : compareThemes.hide}
            src={props ? props.props.website : 'No website provided.'}
          ></iframe>
        </div>
      </div>
      <FooterCompare toggleVisibleContainer={toggleVisibleContainer} />
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 100vw;
          max-height: 100vh;
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
          overflow: scroll;
        }
        .start-over {
          display: flex;
          justify-content: flex-end;
          color: #8855ff;
          text-decoration: none;
          padding: 5px 10px;
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
