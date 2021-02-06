import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { isUserLoggedIn, getInitialData } from "./redux/actions";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Category from "./pages/Category";

const App = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authState);

  useEffect(() => {
    if (!authState.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (authState.authenticate) {
      dispatch(getInitialData());
    }
    
  }, [authState.authenticate]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
