import React, { Component } from "react";
import { Route, Switch } from "react-router";
import AddCoupon from "./components/Coupons/addcoupon/AddCoupon";
import ShowCoupon from "./components/Coupons/showcoupon/ShowCoupon";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";
import Homepage from "./components/Homepage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ReactNotification />
        <Switch>
          <Route component={AddCoupon} path="/addcoupon"></Route>
          <Route component={ShowCoupon} path="/showcoupon"></Route>
          <Route component={Homepage} path="/"></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
