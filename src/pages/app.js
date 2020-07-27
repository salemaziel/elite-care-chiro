import React from "react";
import { Router } from "@reach/router"
import Profile from "../components/AppComponents/Profile"
import PrivateRoute from '../components/AppComponents/PrivateRoute'
//import Details from "../components/Details"
import Login from "../components/AppComponents/Login"
//import Default from "../components/Default"

import Layout from "../components/layout";
import SEO from "../components/seo";

//import AboutPage from '../components/PageComponents/About/aboutPage'



const App = () => {
    return(
  <Layout>
      <Router basepath="/app">
      <PrivateRoute path="/profile" component={Profile} />
        {/*<PrivateRoute path="/details" component={Details} />*/}
        <Login path="/login" />
        {/*<Default path="/" />*/}
      </Router>
  </Layout>
);
}
export default App;
