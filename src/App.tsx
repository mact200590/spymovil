import React from "react";
import "./App.css";
import Routes from "./page/routes/Routes";
import { routesInfo } from "./page/routes/routesInfo";
import GDSelect from "./components/GDSelect";
import GDAddValues from "./components/GDAddValues";
import GDStartGame from "./page/GDStartGame";
import GDBoardGame from "./page/GDBoardGame";
import { makeStyles } from "@material-ui/styles";
import GDWinnerView from "./components/GDWinnerView";

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Routes routes={routesInfo} /> */}
      {/* <GDSelect
        label={"label"}
        typeVariant="primary"
        options={["uno", "dos", "tres", "cuatro", "cinco"]}
        onChange={(e: any) => {
          console.log(e);
        }}
        styleContainer={{ minWidth: "700px" }}
      />
      <GDAddValues
        labelButton="Add player"
        textPlaceHolder={"Add Player"}
        onClick={() => console.log("Imprime en la BD")}
        typeVariant="secondary"
      /> */}
      <GDStartGame />
      {/* <GDBoardGame
        players={["Ale", "Yanio", "Asio"]}
      /> */}
      {/* <GDWinnerView winner={"X"} /> */}
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
