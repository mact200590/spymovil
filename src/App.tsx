import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Routes from "./page/routes/Routes";
import { routesInfo } from "./page/routes/routesInfo";
import { rootReducer } from "./redux/reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, process.env.REACT_APP_DEBUG && composeEnhancers);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Routes routes={routesInfo} />
      </div>
    </Provider>
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
