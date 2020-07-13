import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import MissionVisionPage from "../pages/MissionVisionPage";
import PropertyPage from "../pages/PropertyPage";
import SinglePropertyPage from "../pages/SinglePropertyPage";
import ApartmentPage from '../pages/ApartmentPage';
import LandPage from '../pages/LandPage';
import HousePage from '../pages/HousePage';
import { base_url } from "../config";

function Routes() {
  return (
    <div className="App">
      <Switch>
        <Route path={`${base_url}/`} exact component={LandingPage} />
        <Route path={`${base_url}/contactpage`} exact component={ContactPage} />
        <Route
          path={`${base_url}/mission-vision`}
          exact component={MissionVisionPage}
        />
        <Route path={`${base_url}/property`} exact component={PropertyPage} />
        <Route
          path={`${base_url}/singleproperty`}
          exact component={SinglePropertyPage}
        />

       <Route path={`${base_url}/apartment`} exact component={ApartmentPage} />
       <Route path={`${base_url}/land`} exact component={LandPage} />
       <Route path={`${base_url}/house`} exact component={HousePage} />

      </Switch>
    </div>
  );
}

export default Routes;
