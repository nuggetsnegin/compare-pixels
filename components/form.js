import Chevron from '../public/images/Chevron.svg';

export default function Form() {
  return (
    /*NOTE 1: putting the form inside a main because semantically the form is the 'main' content of the page.
      NOTE 2: using input with type of file but giving it a class of hidden so I can overwrite the default styling/text ('No file chosen'),
            using 'for' as the reference key. More semantic than just using a button, but also awkward with the extra span acting as the label, open to feedback! */
    <main>
      <form>
        <fieldset>
          <div className="form-container">
            <div className="step-one-container">
              <span className="step-labels">Step one</span>
              <label htmlFor="step-one" className="upload-img">
                Upload image
              </label>
              <input
                name="step-one"
                id="step-one"
                type="file"
                className="hidden"
              />
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
              />
            </div>
          </div>
        </fieldset>

        <button className="oval">
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
          position: relative;
          top: -40px;
          left: 456px;
        }
        .upload-img:hover,
        .upload-img:focus {
          background: rgba(0, 0, 0, 0.7);
        }
        .oval {
          width: 34px;
          height: 34px;
          background-image: linear-gradient(to bottom, #8855ff, #6536d3);
          border-radius: 50%;
          cursor: pointer;
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
