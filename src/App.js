import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Portfolio from "./appScreens/Portfolio";
const App=(props)=>{
return(
  <Router>
  <Routes>
    <Route element={<Portfolio/>} path={"/"} history={props.history} />
    </Routes>
    </Router>
)
}

export default App