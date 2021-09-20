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

import ModalClub from '../ModalClub/ModalClub'
import ClubList from '../ClubList/ClubList'

import Registration from '../Registration/Registration'

import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
// import Registration from "../Registration/Registration";
// import NewsList from "../NewsList/NewsList";
import NewsList from "../NewsList/NewsList";


import Game from "../Game/Game";


function App() {

  return (

    <>
      <Provider store={store}>
        <Router>
        <Nav/>
        <Loader/>
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

            <Route path="/galery" exact>
           
            </Route>
            <Route path="/contacts" exact>        
              <SocialLink/>
            </Route>
            <Route path="/map" exact>
              <YandexMap />
            </Route>

            <Route path="/clubs/:id" exact>
              <ClubList />
            </Route>

          <Route exact path="/register">
            <Registration/>
          </Route>
          </Switch>
        </Router>  
      </Provider>
      </>
  );

}

export default App
