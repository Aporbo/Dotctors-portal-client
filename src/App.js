import './App.css';
import React , { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appoinments from './Components/Appoinments/Appoinments/Appoinments';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login/Login';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
        <Switch>
          <Route path="/appointment">
            <Appoinments></Appoinments>
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
