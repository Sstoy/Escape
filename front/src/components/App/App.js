import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route exact path="/map">
            <YandexMap />
          </Route>

        </Switch>
      </Router>
    </Provider>
  )
}

export default App
