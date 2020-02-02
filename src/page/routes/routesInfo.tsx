import { RouteComponentProps } from "react-router-dom";
import SPYLogin from "../../components/SPYLogin";
import SPYPageMain from "../SPYPageMain";

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
    component: SPYLogin,
  },
  {
    exact: true,
    path: "/data-online",
    component: SPYPageMain,
  }
];
