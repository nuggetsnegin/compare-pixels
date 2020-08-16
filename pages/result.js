import { useContext } from 'react';

import { Context } from '../components/Store';

export default function Result() {
  const [state, _] = useContext(Context);
  return (
    <div>
      hello
      <img src={state ? state.image : ''} />
      <div>{state ? state.website : 'No website URL'}</div>
      <style jsx>{`
        width: 100vh;
        background: red;
      `}</style>
    </div>
  );
}
