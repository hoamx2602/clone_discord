const initState = {
  userDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'DUMMY':
      return {
        ...state,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
