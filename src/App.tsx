import React from "react";
import "./App.css";
import Routes from "./page/routes/Routes";
import { routesInfo } from "./page/routes/routesInfo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes routes={routesInfo} />
    </div>
  );
};

export default App;
