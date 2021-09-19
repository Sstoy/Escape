import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import ClubCards from "../ClubCards/ClubCards";
// import FormReserve from "../FormReserve/FormReserve";
import Loader from "../Loader/Loader";
import SocialLink from "../SocialLink/SocialLink";
// import Logo from "../Logo/Logo";
// import MainPage from "../MainPage/MainPage";
// import RunText from "../RunText/RunText";

function App() {
  return (
    <>
     <Router>
     <Loader/>
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
          </Switch>      
     </Router>
    </>
  );
}

export default App;
