/*src: https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf*/
/* created global action types to handle state change*/
const Reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_IMAGE':
      return {
        ...state,
        image: action.payload,
      };
    case 'SET_WEBSITE':
      return {
        ...state,
        website: action.payload,
      };
    default:
      throw new Error();
  }
};

export default Reducer;
