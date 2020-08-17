import { useState } from 'react';
import Link from 'next/link';
import FooterCompare from '../components/FooterCompare';
export default function Result(props) {
  const [imageDimension, setImageDimension] = useState({});
  const [showDesign, setShowDesign] = useState(true);

  const getImageDimensions = () => {
    const imageSize = new Image();
    imageSize.src = props.props.image;
    imageSize.onload = function (e) {
      setImageDimension({ height: imageSize.height, width: imageSize.width });
    };
  };

  getImageDimensions();

  /*defining toggleVisibleContainer in parent/Result 
  but it's being called in child component (FooterCompare) as a prop*/
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
    },
    hide: {
      display: 'none',
    },
  };

  return (
    <main>
      <Link href="/">
        <a className="start-over">Go back</a>
      </Link>
      <div className="card">
        <div
          className="card-inner"
          style={{
            width: imageDimension.width + 'px',
            height: imageDimension.height + 'px',
          }}
        >
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
      {/*passing the method as a prop to the child*/}
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
          border-radius: 5px;
          box-shadow: 0 6px 50px 0 #cfd4d4;
          background-color: #ffffff;
          max-height: 60vh;
          max-width: 90vw;
          margin: 10vh auto;
          overflow: auto;
        }
        iframe {
          border: none;
        }
        .start-over {
          display: flex;
          justify-content: flex-end;
          color: #222222;
          text-decoration: none;
          padding: 10px 25px;
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
