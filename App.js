import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Banner from "./Components/Banner/Banner";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Loginpage">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            {/* <img
              src="https://uidesign.gbtcdn.com/GB/image/5741/en-1920x420.jpg"
              className="mainImage"
            /> */}
            <Banner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
