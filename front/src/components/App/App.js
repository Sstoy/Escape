import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import store from "../../redux/store";
import ClubList from '../ClubList/ClubList';
import Registration from "../Registration/Registration";
import Game from "../Game/Game";
import Slider from "../Slider/Slider";
import NavBurg from "../NavBurg/NavBurg";
import ClubInfo from "../ClubInfo/ClubInfo";
import AdminForm from "../AdminForm/AdminForm";
import ClubNumberOne from "../ClubNumberOne/ClubNumberOne";
import Blog from "../Blog/Blog";
import ArticleOne from "../BlogArticles/ArticleOne";
import ArticleTwo from "../BlogArticles/ArticleTwo";
import ArticleThree from "../BlogArticles/ArticleThree";
import OurComputers from "../OurComputers/OurComputers";
import About from "../About/About";
import LogoClub from "../LogoClub/LogoClub";
import Quest from "../Quest/Quest";
import MainPage from "../MainPage/MainPage";
import AdminTable from "../AdminTable/AdminTable";
import Review from "../Review/Review";
import User from "../User/User";
import RunText from "../RunText/RunText";
import AdminClubList from "../AdminClubList/AdminClubList"


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
            <RunText />
            <ClubList />
            <Game />

            <Footer />

          </Route>

          <Route path="/galery" exact>
            <RunText />
            <Slider />
            <Footer />
          </Route>

          <Route path="/contacts" exact>
            <Review />
          </Route>

          <Route path="/about" exact>
            <RunText />
            <ClubNumberOne />
            <Blog />
            <OurComputers />
            <About />
            <Quest />
            <Footer />
          </Route>

          <Route path="/clubs/:id" exact>
            <RunText />
            <ClubInfo />
            <Footer />
          </Route>

          <Route path="/blog/1" exact>
            <RunText />
            <ArticleOne />
            <Footer />
          </Route>

          <Route path="/blog/2" exact>
            <RunText />
            <ArticleTwo />
            <Footer />
          </Route>

          <Route path="/blog/3" exact>
            <RunText />
            <ArticleThree />
            <Footer />
          </Route>

          <Route exact path="/register">
            <RunText />
            <Registration />
            <Footer />
          </Route>

          <Route exact path="/admin">
            <AdminForm />
          </Route>

          <Route exact path="/admin-site">
            <AdminTable />
          </Route>

          <Route exact path="/admin/prices">
            <AdminClubList />
          </Route>

          <Route exact path="/user/:id">
            <User />
          </Route>
          

        </Switch >
      </Router >
    </Provider >
  );
}

export default App
