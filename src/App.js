import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import AddCoupon from "./components/Coupons/addcoupon/AddCoupon";
import ShowCoupon from "./components/Coupons/showcoupon/ShowCoupon"
import Homepage from "./components/Homepage"
import "./App.css"


class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route component={AddCoupon} path="/addcoupon"></Route>
          <Route component={ShowCoupon} path="/showcoupon"></Route>
          <Route component={Homepage} path="/"></Route>
        </Switch>
      </div>
    )
  }
}
export default App;