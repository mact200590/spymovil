import { RouteComponentProps } from "react-router-dom";
import GDStartGame from "../GDStartGame";
import GDBoardGame from "../GDBoardGame";
import GDWinnerView from "../../components/GDWinnerView";

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
  }
];
