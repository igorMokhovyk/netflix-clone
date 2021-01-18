import React from 'react';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import Signin from "./pages/signin";



export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse/>
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin/>
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup/>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
  );
}
