import { RouteComponentProps } from "react-router-dom";

export interface Route {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  showMenuItem: boolean;
  exact: boolean;
}

export const routesInfo: Route[] = [
  // {
  //   exact: true,
  //   path: "/",
  //   component: SignIn,
  //   showMenuItem: false
  // },
  // {
  //   exact: true,
  //   path: "/restaurants",
  //   component: Restaurants,
  //   showMenuItem: true
  // }
];
