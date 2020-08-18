export default function Header() {
  return (
    <div className="header-container">
      <header>
        <h1>Compare pixels</h1>
        <h2>See the difference between design mockups and the live website.</h2>
      </header>
      <style jsx>{`
        .header-container {
          margin: 0 auto;
          margin-top: 180px;
          text-align: center;
          width: 55vw;
        }
        h1 {
          color: #222222;
          font-weight: 700;
          font-size: 2.625rem; /*42px*/
          margin-bottom: 17px;
        }
        h2 {
          color: #888888;
          font-weight: 400;
          font-size: 1.625rem; /*26px*/
          margin-top: 17px;
          width: 440px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          h1 {
            white-space: nowrap;
            font-size: 2rem;
          }
          h2 {
            width: auto;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
