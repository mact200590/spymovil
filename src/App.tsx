import { makeStyles } from "@material-ui/styles";
import React from "react";
import "./App.css";
import Routes from "./page/routes/Routes";
import { routesInfo } from "./page/routes/routesInfo";

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Test
      {/* <Routes routes={routesInfo} /> */}
    </div>
  );
};

export default App;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
}));
