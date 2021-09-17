import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Map from "../Map/Map";
import store from "../../redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route exact path="/map">
            <Map />
          </Route>

        </Switch>
      </Router>
    </Provider>
  )
}

export default App
