export default function Result(props) {
  return (
    <div>
      hello
      <img src={props ? props.props.image : 'No image uploaded.'} />
      <div>{props ? props.props.website : 'No website provided.'}</div>
      <iframe></iframe>
      <button>Mockup</button>
      <button>Website</button>
      <style jsx>{`
        width: 100vh;
        background: red;
      `}</style>
    </div>
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
