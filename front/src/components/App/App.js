import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
import { Provider } from "react-redux";
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store";

import Nav from '../Nav/Nav'
import ClubList from '../ClubList/ClubList'
import Registration from '../Registration/Registration'
import Logo from "../Logo/Logo";
import RunText from "../RunText/RunText";
import NewsList from "../NewsList/NewsList";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Loader />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <div className="content" style={{ padding: '80px' }}>
              <RunText />
              <Logo />
              <NewsList />
            </div>
          </Route>

          <Route path="/clubs" exact>
            <div className="content" style={{ padding: '80px' }}>
              <ClubList />
            </div>
          </Route>

          <Route path="/aboutus" exact>

          </Route>

          <Route path="/galery" exact>

          </Route>
          <Route path="/contacts" exact>
            <SocialLink />
          </Route>
          <Route path="/map" exact>
            <YandexMap />
          </Route>

          <Route path="/clubs/:id" exact>
            <ClubList />
          </Route>

          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );

}

export default App
