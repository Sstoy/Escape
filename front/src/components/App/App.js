import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";

import Footer from "../Footer/Footer";
import { Provider } from "react-redux"

import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store";

import Nav from '../Nav/Nav'
import ClubList from '../ClubList/ClubList'
import Registration from '../Registration/Registration'
import Logo from "../Logo/Logo";
import RunText from "../RunText/RunText";
import NewsList from "../NewsList/NewsList";
import Promo from '../Promo/Promo';

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
              <Promo />
            </div>
          </Route>


    <>
      <Provider store={store}>
        <Router>
          <Nav />
          <NewsList />
          <Loader />
          <Switch>
            {/* <Route path="/" exact>  
          
              <SocialLink/>

          <Route path="/clubs" exact>
            <div className="content" style={{ padding: '80px' }}>
              <ClubList />
            </div>
          </Route>


          <Route path="/aboutus" exact>


            <Route path="/" exact>
              <RunText />
              <Logo />
              {/* <FormReserve/> */}
              {/* <ClubCards/> */}
              <Footer />
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
    </>

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
