
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
      return { ...state, computers: action.payload }

    case 'INIT_ADMIN':
      return { ...state, isAdmin: action.payload.isAdmin }

    case 'INIT_USER':
      return { ...state, user: action.payload }

    case 'CHANGE_PROMO_STATUS':
      return { ...state, user: action.payload }

    case 'CHANGE_CLUB_INFO':
      return {
        ...state, clubs: [...state.clubs.map((club) => {
          if (club.id === action.payload.id) {
            return { ...club, phone: action.payload.phone, computers: action.payload.computers }
          } return { ...club }
        })]
      }

    case 'CHANGE_CLUB_VIP_PRICES':
      return {
        ...state, prices: [...state.prices.map((price) => {
          if (price.id === action.payload.id) {
            return {
              ...price,
              onehour: action.payload.vipPrice1,
              fivehours: action.payload.vipPrice5,
              nightweekday: action.payload.vipPriceDay,
              nightweekend: action.payload.vipPriceWeekend,
              morning: action.payload.vipPriceMorning,
              twentyfourhours: action.payload.vipPrice24Hours,
              PS: action.payload.vipPricePS,
            }
          } return { ...price }
        })]
      }

      case 'CHANGE_CLUB_GENERAL_PRICES':
      return {
        ...state, prices: [...state.prices.map((price) => {
          if (price.id === action.payload.id) {
            return {
              ...price,
              onehour: action.payload.Price1,
              fivehours: action.payload.Price5,
              nightweekday: action.payload.PriceDay,
              nightweekend: action.payload.PriceWeekend,
              morning: action.payload.PriceMorning,
              twentyfourhours: action.payload.Price24Hours,
              PS: action.payload.PricePS,
            }
          } return { ...price }
        })]
      }


    default:
      return state;
  }
}

export default reducer;
