import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store"

import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
import NewsList from "../NewsList/NewsList";
import ClubList from "../ClubList/ClubList"

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          {/* <Nav/>         */}
          <Switch>
            <Route path="/" exact>
              <RunText />
              <Logo />
              <NewsList />
            </Route>
            
            <Route path="/clubs" exact>
              <ClubList />
            </Route>

            <Route path="/aboutus" exact>

            </Route>

            <Route path="/prices" exact>

            </Route>

            <Route path="/news" exact>

            </Route>
            
            <Route path="/contactus" exact>

            </Route>

            <Route path="/map" exact>
              <YandexMap />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App
