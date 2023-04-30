import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeMappings } from "../../../constants/routeMappings";
import Home from "../Home";
import Login from "../SignIn";
import { withAuthentication } from "./WithAuthentication";

export interface CustomProps {
  pageName?: string;
}

export interface RoutePageProps {
  customProps?: CustomProps;
  routes?: RouteParams[];
}
export interface RouteParams {
  path: string;
  exact?: boolean;
  strict?: boolean;
  Component: (props: RoutePageProps) => JSX.Element;
  routes?: RouteParams[];
}

const Dashboard = (): JSX.Element => <div>dashbord</div>;

const routes: RouteParams[] = [
  {
    path: routeMappings["HOME"],
    Component: Home,
    exact: true,
  },
  {
    path: routeMappings["DASHBOARD"],
    Component: withAuthentication(Dashboard),
    exact: true,
  },
  {
    path: routeMappings["LOGIN"],
    Component: Login,
    exact: true,
  },
];

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
