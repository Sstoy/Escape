import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ClubCards from "../ClubCards/ClubCards";
import FormReserve from "../FormReserve/FormReserve";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store"
import Nav from '../Nav/Nav'

import Logo from "../Logo/Logo";
import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
import NewsList from "../NewsList/NewsList";
import Game from "../Game/Game";
import Nav1 from "../nav1/Nav1";


function App() {

  return (
    <Provider store={store}>
     <Router>
       <Nav/>      
       <Loader/>            
          <Switch>
            <Route path="/" exact> 
            <Nav1/>
              <RunText/>
              <Logo/>           
              {/* <FormReserve/> */}             
              {/* <ClubCards/> */}
            </Route>
            <Route path="/" exact>
            
            </Route>
            <Route path="/" exact>

            </Route>
            <Route path="/galery" exact>
            <Game/>
            </Route>
            <Route path="/contacts" exact>
              <SocialLink/>
            </Route>
            <Route path="/map" exact>
              <YandexMap />
            </Route>
          </Switch>
        </Router>  
      </Provider>
  );
}

export default App
