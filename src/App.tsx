import { makeStyles } from "@material-ui/styles";
import React from "react";
import "./App.css";
import Routes from "./page/routes/Routes";
import { routesInfo } from "./page/routes/routesInfo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <div className={classes.container}>
        <Routes routes={routesInfo} />
      </div>
    </ApolloProvider>
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
