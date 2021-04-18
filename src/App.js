import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import SignUp from "./Pages/SIgnUp/SignUp";
import CheckOut from "./Pages/CheckOut/CheckOut";
export const UserContext = createContext();
export const SignInContext = createContext();
export const OrderContext=createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  const [orderProducts,setOrderProducts]=useState()
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <SignInContext.Provider value={[isSignIn, setIsSignIn]}>
      <OrderContext.Provider value={[orderProducts,setOrderProducts]}>
    <Router>
      <div className="App">
     

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <SignUp/>
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <CheckOut/>
          </PrivateRoute>
        </Switch>

      
    
      </div>
    </Router>
    </OrderContext.Provider>
    </SignInContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
