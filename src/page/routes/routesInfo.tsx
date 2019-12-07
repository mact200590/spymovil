import { RouteComponentProps } from "react-router-dom";
import GDStartGame from "../GDStartGame";
import GDBoardGame from "../GDBoardGame";
import GDWinnerView from "../GDWinnerView";
import GDConfiguration from "../GDConfiguration";
import GDStatistics from "../GDStatistics";

export interface Route {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
}

export const routesInfo: Route[] = [
  {
    exact: true,
    path: "/",
    component: GDStartGame,
  },
  {
    exact: true,
    path: "/main",
    component: GDBoardGame,
  },
  {
    exact: true,
    path: "/result",
    component: GDWinnerView,
  },
  {
    exact: true,
    path: "/config",
    component: GDConfiguration,
  },
  {
    exact: true,
    path: "/statistics",
    component: GDStatistics,
  }
];
