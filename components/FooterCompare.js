import AdLogo from '../public/images/AdLogo.svg';

export default function Footer({ toggleVisibleContainer }) {
  return (
    <footer>
      <div className="compare-buttons">
        <button
          onClick={() => toggleVisibleContainer('design')}
          className="design-button"
        >
          Design
        </button>
        <button
          onClick={() => toggleVisibleContainer('website')}
          className="website-button"
        >
          Website
        </button>
      </div>

      <div className="feedback-logo">
        <img className="logo" src={AdLogo} alt="Pastel logo inside white box" />
        <div className="feedback">
          <p className="feedback-question">Spot any issues on the website?</p>
          <p className="feedback-link">
            Share feedback on live websites with Pastel{' '}
            <a href="https://usepastel.com/" target="_blank">
              Get started now
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          box-shadow: inset 0 5px 10px 0 rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(to bottom, #4a4a4a, #222222 125%);
          width: 100vw;
          height: 15vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          color: #ffffff;
        }
        p {
          margin: 0px;
        }
        img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-right: 17px;
        }
        .feedback-logo {
          display: grid;
          grid-template-columns: repeat(2, min-content);
          margin-top: 40px;
          margin-bottom: 37px;
        }
        .feedback {
          font-size: 14px;
          margin-right: 40px;
        }
        .feedback-question {
          margin-bottom: 3px;
          font-weight: bold;
          width: 225px;
        }
        .feedback-link {
          opacity: 0.6;
          line-height: 1.43;
          width: 215px;
        }
        .design-button {
          margin-left: 92.8px;
          margin-right: 21.2px;
        }
        button {
          font-size: 19.2px;
          color: #bababa;
          border: none;
          background: none;
          padding: none;
          height: 25px;
        }
        button:focus {
          color: #ffffff;
          border-bottom: solid 1.6px #ffffff;
          outline: none;
          height: 25px; /*fix height jump*/
        }
        a {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}
