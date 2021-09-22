import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
import Footer from "../Footer/Footer";
import store from "../../redux/store";
import ClubList from '../ClubList/ClubList';
import Registration from "../Registration/Registration";
import Game from "../Game/Game";
import Slider from "../Slider/Slider";
import YandexReview from "../YandexReview/YandexReview";
import NavBurg from "../NavBurg/NavBurg";
import ClubInfo from "../ClubInfo/ClubInfo";
import LogoClub from "../LogoClub/LogoClub";
import MainPage from "../MainPage/MainPage";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Loader />
        <LogoClub />
        <NavBurg />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/clubs" exact>
            <ClubList />
            <Game />

          </Route>

          <Route path="/galery" exact>
            <Slider />
          </Route>

          <Route path="/contacts" exact>
            <SocialLink />
          </Route>

          <Route path="/yandexreview" exact>
            <YandexReview />
            <Footer />
          </Route>

          <Route path="/clubs/:id" exact>
            <ClubInfo />
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
