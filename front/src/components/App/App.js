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

import Game from "../Game/Game";
import Slider from "../Slider/Slider";

import Promo from '../Promo/Promo';
import YandexReview from "../YandexReview/YandexReview";
import ClubInfo from "../ClubInfo/ClubInfo";

import ClubNumberOne from "../ClubNumberOne/ClubNumberOne";
import Blog from "../Blog/Blog";
import ArticleOne from "../BlogArticles/ArticleOne";
import ArticleTwo from "../BlogArticles/ArticleTwo";
import ArticleThree from "../BlogArticles/ArticleThree";
import OurComputers from "../OurComputers/OurComputers";
import About from "../About/About";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Loader />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <RunText />
            <Logo />
            <YandexMap />
            <NewsList />
            <Promo />
            <Footer />
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

          <Route path="/about" exact>
            <ClubNumberOne />
            <Blog />
            <OurComputers />
            <About/>
            <Footer />
          </Route>

          <Route path="/clubs/:id" exact>
            <ClubInfo />
          </Route>

          <Route path="/blog/1" exact>
            <ArticleOne />
            <Footer />
          </Route>

          <Route path="/blog/2" exact>
            <ArticleTwo />
            <Footer />
          </Route>

          <Route path="/blog/3" exact>
            <ArticleThree/>
            <Footer />
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
