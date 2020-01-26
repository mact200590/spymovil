import { RouteComponentProps } from "react-router-dom";

export interface Route {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
}

export const routesInfo: Route[] = [
  // {
  //   exact: true,
  //   path: "/",
  //   component: GDStartGame,
  // }
];
