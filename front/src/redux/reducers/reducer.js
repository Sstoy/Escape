const initialState = { news: [], clubs: [], prices: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_NEWS':
      console.log('INIT NEWS');
      // console.log('ACTION', action.payload);
      return { ...state, news: action.payload };

    case 'INIT_CLUBS':
      return { ...state, clubs: action.payload }

    case 'INIT_PRICES':
      return { ...state, prices: action.payload }

    default:
      return state;
  }
}

export default reducer;
