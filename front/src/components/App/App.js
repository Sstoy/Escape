import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ClubCards from "../ClubCards/ClubCards";
// import FormReserve from "../FormReserve/FormReserve";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
// import Logo from "../Logo/Logo";
import { Provider } from "react-redux"
import YandexMap from "../YandexMap/YandexMap";
import store from "../../redux/store"

import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
import RunText from "../RunText/RunText";
// import NewsList from "../NewsList/NewsList";

function App() {

  return (
    <Provider store={store}>
     <Router>
          <Loader/>
       <RunText/>
       <Logo/>
  
        {/* <Nav/>         */}
          <Switch>
            <Route path="/" exact>  
          
              {/* <FormReserve/> */}
              <SocialLink/>
              {/* <ClubCards/> */}
            </Route>
            <Route path="/" exact>
            
            </Route>
            <Route path="/" exact>

            </Route>
            <Route path="/" exact>

            </Route>
            <Route path="/" exact>

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
