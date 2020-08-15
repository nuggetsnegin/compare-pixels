import AProjectbyPastel from '../public/images/AProjectbyPastel.svg';

export default function Footer() {
  return (
    <footer>
      <p>
        <img src={AProjectbyPastel} alt="Pastel logo in white" />
      </p>

      <style jsx>{`
        footer {
          box-shadow: inset 0 5px 10px 0 rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(to bottom, #4a4a4a, #222222 125%);
          width: 100vw;
          height: 10vh;
        }
        p {
          color: #ffffff;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
