import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Chevron from '../public/images/Chevron.svg';

export default function Form() {
  /* Using hook 'useRef', initializing as empty
  src: https://react-hooks-cheatsheet.com/useRef*/
  const imageUploader = useRef(null);
  const router = useRouter();

  const [image, setImage] = useState(null);
  const [website, setWebsite] = useState('');
  const [showError, setShowError] = useState(false);

  const onSubmit = (e) => {
    /*prevent page from refreshing*/
    e.preventDefault();
    validateWebsiteURL();
    usePastelProxy();

    console.log(showError);
    if (showError === false) {
      router.push({
        pathname: '/result',
        query: { image: image, website: website },
      });
    }
  };

  const handleImageUpload = (e) => {
    const imageUploaded = e.target.files;

    if (imageUploaded && imageUploaded.length > 0) {
      /*load image to URL so we can use as an image src value to pass as a prop
      src: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL*/
      const imageURL = URL.createObjectURL(imageUploaded[0]);
      setImage(imageURL);
    } else {
      /*clears the image on cancel, may not be the best UX? open to feedback about this decision*/
      setImage(null);
    }
  };

  const validateWebsiteURL = () => {
    if (!website.startsWith('https://') || !website.startsWith('http://')) {
      console.log('invalid url');
      setShowError(true);
    }
  };

  const usePastelProxy = async () => {
    /*using axios because fetch isnt available for all browsers, IE/Opera*/
    const response = await fetch('https://api.pastelcanvases.com/verify-url', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        url: website,
        userAgent: window.navigator.userAgent,
      }),
    });
    const result = await response.json();
  };

  return (
    /*NOTE 1: putting the form inside a main because semantically the form is the 'main' content of the page.*/
    <main>
      <form onSubmit={onSubmit}>
        <fieldset>
          <div className="form-container">
            <div className="step-one-container">
              <label className="step-labels">Step one</label>
              <input
                name="step-one"
                id="step-one"
                type="file"
                accept="image/*"
                multiple={false}
                style={{ display: 'none' }}
                ref={imageUploader}
                onChange={handleImageUpload}
              />
              <button
                type="button" /*default submit, will submit form before image is picked*/
                className="upload-img"
                onClick={() => imageUploader.current.click()}
              >
                Upload image
              </button>
            </div>
            <div className="step-two-container">
              <label htmlFor="step-two" className="step-labels step-two">
                Step two
              </label>
              <input
                name="step-two"
                id="step-two"
                type="text"
                placeholder="Enter website URL"
                className="website-input"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <button className="oval" disabled={image === null && website === ''}>
          <img className="chevron" src={Chevron} alt="Chevron icon" />
        </button>
      </form>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          margin-top: 74px;
        }
        .form-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 20px;
          text-align: center;
        }
        form {
          width: 512px;
          height: 124px;
          border-radius: 10px;
          box-shadow: 0 6px 50px 0 #cfd4d4;
          background-color: #ffffff;
        }
        fieldset {
          border: none;
          padding: 0;
        }
        button {
          background: none;
          padding: 0;
          border: none;
          cursor: pointer;
        }
        button:focus {
          outline-color: #6536d3;
        }
        .oval {
          width: 34px;
          height: 34px;
          background-image: linear-gradient(to bottom, #8855ff, #6536d3);
          border-radius: 50%;
          position: relative;
          top: -40px;
          left: 456px;
        }
        .oval:disabled {
          opacity: 0.7;
        }
        .chevron {
          position: relative;
          top: 1px;
          left: 1px;
        }
        .hidden {
          display: none;
        }
        .upload-img,
        .website-input {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          text-align: center;
          width: 185px;
          height: 42px;
          border-radius: 5px;
          margin-top: 18px;
        }
        .upload-img {
          background-color: #919d9d;
          color: #ffffff;
          margin-left: 35px;
        }
        .step-labels {
          font-size: 18px;
          color: #39383e;
        }
        .step-two {
          position: relative;
          right: 30px;
        }
        .website-input {
          box-shadow: inset 1px 2px 7px 0 rgba(96, 96, 96, 0.31);
          border: solid 1px #c6c6c6;
          background-color: #ffffff;
        }
        .website-input:focus {
          outline: none !important;
          border-color: #8855ff;
        }
      `}</style>
    </main>
  );
}
