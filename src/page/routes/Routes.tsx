import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Route as RouteDefinition } from "./routesInfo";

interface Props {
  routes: RouteDefinition[];
}

// The routes are declared in this way './routes/routes'
const Routes: React.FC<Props> = ({ routes }) => {
  return (
    <Router>
      <Switch>
        {routes.map(({ exact, path, component }, i) => (
          <Route key={i} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
