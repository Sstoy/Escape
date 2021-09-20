import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";
import reducer from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools())

export default store
