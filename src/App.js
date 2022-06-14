import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Employee from "./service/components/employee";
import Attendance from "./service/components/attendance";
import EditTable from "./service/components/edit";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="containerr">
          <Switch>
            <Route path="/employees" component={Employee} />
            <Route path="/attendance/:id" component={Attendance} />
            <Route path="/edit/:id?" component={EditTable} />
            <Redirect from="/" exact to="/employees" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
