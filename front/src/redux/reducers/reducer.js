
const initialState = { news: [], clubs: [], prices: [], computers: [] };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_NEWS':
      return { ...state, news: action.payload };

    case 'INIT_CLUBS':
      return { ...state, clubs: action.payload }

    case 'INIT_PRICES':
      return { ...state, prices: action.payload }

    case 'INIT_COMPUTERS':
      console.log('INIT_COMPUTERS');
      return { ...state, computers: action.payload }

    default:
      return state;
  }
}

export default reducer;
