import { makeStyles } from "@material-ui/styles";
import React from "react";
import "./App.css";
import GDStartGame from "./page/GDStartGame";

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GDStartGame />
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
