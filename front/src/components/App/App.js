import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
import Footer from "../Footer/Footer";
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store";
import Nav from '../LogoClub/LogoClub'
import ClubList from '../ClubList/ClubList'
import Registration from '../Registration/Registration'
// import Logo from "../Logo/Logo";
import RunText from "../RunText/RunText";
import NewsList from "../NewsList/NewsList";
import Game from "../Game/Game";
import Slider from "../Slider/Slider";
import Promo from '../Promo/Promo';
import YandexReview from "../YandexReview/YandexReview";
import NavBurg from "../NavBurg/NavBurg";
import ClubInfo from "../ClubInfo/ClubInfo";
import LogoClub from "../LogoClub/LogoClub";
import Quest from "../Quest/Quest";
import MainPage from "../MainPage/MainPage";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Loader />  
        <LogoClub/> 
        <NavBurg/>     
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
