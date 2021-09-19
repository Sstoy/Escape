import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import ComponentOne from "../ComponentOne/ComponentOne";
import ComponentTwo from "../ComponentTwo/ComponentTwo";
import ComponentThree from "../ComponentThree/ComponentThree";
import ComponentFour from "../ComponentFour/ComponentFour";
import PlacemarkRedirect from "../PlacemarkRedirect/PlacemarkRedirect";
import RegisterPhone from "../RegisterPhone/RegisterPhone";
import store from "../../redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route exact path="/map">
            <YandexMap />
          </Route>
          <Route exact path="/registerphone">
            <RegisterPhone />
          </Route>
          <Route exact path="/placemark">
            <PlacemarkRedirect />
          </Route>
          <Route exact path="/componentone">
            <ComponentOne />
          </Route>
          <Route exact path="/componenttwo">
            <ComponentTwo />
          </Route>
          <Route exact path="/componentthree">
            <ComponentThree />
          </Route>
          <Route exact path="/componentfour">
            <ComponentFour />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
