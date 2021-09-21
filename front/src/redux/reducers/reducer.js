
const initialState = { news: [], clubs: [], prices: [] };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_NEWS':
      console.log('INIT NEWS');
      // console.log('ACTION', action.payload);
      return { ...state, news: action.payload };

    case 'INIT_CLUBS':
      console.log('INIT INIT_CLUBS');

      return { ...state, clubs: action.payload }

    case 'INIT_PRICES':
      console.log('INIT PRICES');
      return { ...state, prices: action.payload }

    default:
      return state;
  }
}

export default reducer;
