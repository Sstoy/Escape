import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ClubCards from "../ClubCards/ClubCards";
import FormReserve from "../FormReserve/FormReserve";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import RegisterPhone from "../RegisterPhone/RegisterPhone";
import store from "../../redux/store"
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration'
import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
// import Registration from "../Registration/Registration";
// import NewsList from "../NewsList/NewsList";
import NewsList from "../NewsList/NewsList";
import Game from "../Game/Game";
// import Nav1 from "../nav1/Nav1";
// import Review from "../Review/Review";


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Loader />
        <Switch>
          <Route path="/" exact>
            <NewsList />
            <RunText />
            <Logo />
            {/* <FormReserve/> */}
            {/* <ClubCards/> */}
          </Route>
          <Route path="/" exact>

          </Route>
          <Route path="/" exact>

          </Route>
          <Route path="/galery" exact>
            <Game />
          </Route>
          <Route path="/contacts" exact>
            <SocialLink />
          </Route>
          <Route path="/map" exact>
            <YandexMap />
          </Route>

          <Route exact path="/registerphone">
            {/* <RegisterPhone /> */}
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
