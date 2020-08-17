import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Chevron from '../public/images/Chevron.svg';

export default function Form() {
  /* Using hook 'useRef', initializing as empty
  src: https://react-hooks-cheatsheet.com/useRef*/
  const imageUploader = useRef(null);
  const router = useRouter();

  const [image, setImage] = useState(null);
  const [website, setWebsite] = useState('');
  const [proxyUrl, setProxyUrl] = useState(null);
  const [showError, setShowError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* showError wasn't updating state correctly when setting it onSubmit (or anywhere), useEffect listens to showError changing
  if it changes we call redirectForm*/
  useEffect(() => {
    validateAndRedirectForm();
  }, [image, isSubmitted, showError, proxyUrl]);

  /*calling everytime the showError flag changes*/
  const validateAndRedirectForm = () => {
    /*check whether to redirect, only redirect if there's no error, image and website exists*/
    if (isSubmitted && !showError && proxyUrl && image) {
      router.push({
        pathname: '/result',
        query: { image: image, website: proxyUrl },
      });
    }
  };
  const onSubmit = (e) => {
    /*prevent page from refreshing*/
    e.preventDefault();
    usePastelProxy();
    setIsSubmitted(true);
  };

  const handleImageUpload = (e) => {
    const imageUploaded = e.target.files;

    if (imageUploaded && imageUploaded.length > 0) {
      /*load image to URL so we can use as an image src value to pass as a prop
      src: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL*/
      const imageURL = URL.createObjectURL(imageUploaded[0]);
      setIsSubmitted(false);
      setImage(imageURL);
    } else {
      /*clears the image on cancel, may not be the best UX? open to feedback about this decision*/
      setIsSubmitted(false);
      setImage(null);
    }
  };

  const validateWebsiteURL = () => {
    const prefix = 'http://';
    let isValidURL = false;
    /* necessary for Pastel proxy API, another option could be inject it infront of the URL if not provided*/
    /*is there a better way to do this? should I append http/https?*/
    if (website.startsWith('https://') || website.startsWith('http://')) {
      isValidURL = true;
      setShowError(false);
    } else {
      /*forcefully prepending http to url - can this be done better/less bruteforcey and can I finda way to check if the site is secure and append https instead?*/
      setWebsite(prefix + website);
    }
    return isValidURL;
  };

  const usePastelProxy = async () => {
    let isValidURL = validateWebsiteURL();
    /*using axios because fetch isnt available for all browsers, IE/Opera*/
    if (isValidURL) {
      const response = await fetch(
        'https://api.pastelcanvases.com/verify-url',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            url: website,
            userAgent: window.navigator.userAgent,
          }),
        }
      );
      const result = await response.json();
      setShowError(false);
      setProxyUrl(result.proxyURL.href);
    } else {
      setShowError(true);
    }
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
                type="button" /*default submit, changed to button so form will not submit before image is picked*/
                className="upload-img"
                onClick={() => imageUploader.current.click()}
              >
                Upload image
              </button>
              {isSubmitted && image === null ? (
                <span className="error image-error">
                  No valid image uploaded.
                </span>
              ) : null}
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
                required
              />
              <button
                className="submit-button oval"
                disabled={image === null && website === ''}
              >
                <img className="chevron" src={Chevron} alt="Chevron icon" />
              </button>
            </div>
            {showError ? (
              <span className="error website-error">
                Sorry, Pastel couldn't load this site.
              </span>
            ) : null}
          </div>
        </fieldset>
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
          height: 134px;
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
        button:disabled {
          cursor: auto;
        }
        button:focus,
        .website-input:focus {
          outline: none;
          border: 1px solid #8855ff;
        }
        .oval {
          width: 34px;
          height: 34px;
          background-image: linear-gradient(to bottom, #8855ff, #6536d3);
          border-radius: 50%;
        }
        .oval:disabled {
          opacity: 0.7;
        }
        .submit-button {
          display: inline;
          position: relative;
          top: -37px;
          left: 83px;
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
          font-weight: 500; /*despite showing in the inspector/computed as font-weight: 500 it doesn't display as such, trying different ways of importing didn't solve the problem :( */
        }
        .upload-img {
          background-color: #919d9d;
          color: #ffffff;
          margin-left: 35px;
          margin-right: 20px;
        }
        .step-labels {
          font-size: 18px;
          color: #39383e;
        }
        .step-two {
          position: relative;
          right: 42px;
        }
        .website-input {
          box-shadow: inset 1px 2px 7px 0 rgba(96, 96, 96, 0.31);
          border: solid 1px #c6c6c6;
          background-color: #ffffff;
          margin-right: 84px;
        }
        .error {
          font-size: 10px;
          color: red;
        }
        .website-error {
          position: relative;
          left: 213px;
          top: -29px;
        }
      `}</style>
    </main>
  );
}
