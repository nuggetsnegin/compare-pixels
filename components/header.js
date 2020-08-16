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
          font-size: 2.6rem;
          margin-bottom: 17px;
        }
        h2 {
          color: #888888;
          font-weight: 400;
          font-size: 1.6rem;
          margin-top: 17px;
          width: 440px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
