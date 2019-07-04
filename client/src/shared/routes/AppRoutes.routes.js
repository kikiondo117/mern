import React from "react";
import { Switch, Route } from "react-router-dom";
// ? Components
import App from "../../area/app/App.area";
import HomeConatiner from "../../pages/home/Home.conatiner";
import AboutContainer from "../../pages/about/About.container";

function AppRouter() {
  return (
    <App>
      <Switch>
        <Route path='/about' component={AboutContainer} />
        <Route path='/' component={HomeConatiner} />
      </Switch>
    </App>
  );
}

export default AppRouter;
