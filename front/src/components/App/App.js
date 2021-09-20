import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ClubCards from "../ClubCards/ClubCards";
// import FormReserve from "../FormReserve/FormReserve";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
// import Logo from "../Logo/Logo";
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import RegisterPhone from "../RegisterPhone/RegisterPhone";
import store from "../../redux/store"
import Nav from '../Nav/Nav'
import ModalClub from '../ModalClub/ModalClub'
import ClubList from '../ClubList/ClubList'
import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
// import NewsList from "../NewsList/NewsList";

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          {/* <Nav/> */}

          <Switch>
            {/* <Route path="/" exact>  
          
              <SocialLink/>

            </Route> */}

            <Route path="/map" exact>
              <YandexMap />
            </Route>

            <Route path="/clubs/:id" exact>
              <ClubList />
            </Route>

          <Route exact path="/registerphone">
            <RegisterPhone />
          </Route>
          </Switch>
        </Router>  
      </Provider>
      </>
  );

}

export default App
