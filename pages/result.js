import { useState } from 'react';
import Link from 'next/link';
import FooterCompare from '../components/FooterCompare';
export default function Result(props) {
  const [imageDimension, setImageDimension] = useState({});
  const [showDesign, setShowDesign] = useState(true);

  /*grabbing image size 'state' to change the iframe size programmatically*/
  const getImageDimensions = () => {
    const imageSize = new Image();
    imageSize.src = props.props.image;
    /*had to use onload for the prop or else the image is undefined during the check*/
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
    // Change to transition/opacity fade
    show: {
      opacity: '1',
      transition: 'opacity 1s linear',
    },
    hide: {
      opacity: '0',
      transition: 'opacity 1s linear',
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
      {/*passing the method toggleVisibleContainer as a prop to the child, showDesign so we can implement programmatic focus state*/}
      <FooterCompare
        toggleVisibleContainer={toggleVisibleContainer}
        showDesign={showDesign}
      />
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
          max-height: 70vh;
          max-width: 90vw;
          margin: 5vh auto;
          overflow: auto;
        }
        img {
          display: block;
          margin-top: -1px; /*extra spacing/border appearing by default*/
        }
        iframe {
          border: none;
          position: relative;
          display: block;
          top: -${imageDimension.height}px; /*dynamically setting relative location*/
          margin-bottom: -${imageDimension.height}px; /*dynamically removing extra white space from using relative positioning*/
          /*manually reposition so it's exactly ontop of the image - note:look into why there's extra spacing*/
          margin-top: -4px;
          margin-left: -3px;
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

/*grabbing state of image and website from Form component*/
Result.getInitialProps = (context) => {
  return {
    props: {
      image: context.query.image,
      website: context.query.website,
    },
  };
};
