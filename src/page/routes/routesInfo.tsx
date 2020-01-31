import { RouteComponentProps } from "react-router-dom";
import SPYLogin from "../../components/SPYLogin";

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
  }
];
