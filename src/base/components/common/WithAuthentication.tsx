import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routeMappings } from "../../../constants/routeMappings";
import { RoutePageProps } from "./Routes";

export const withAuthentication =
  <P extends RoutePageProps>(Component: React.ComponentType<P>): ((props: P) => JSX.Element) =>
  (props: P): JSX.Element => {
    const userSesseionActive = sessionStorage.getItem("userSesseionActive") === "true";
    const navigate = useNavigate();

    useEffect(() => {
      if (!userSesseionActive) navigate(routeMappings["LOGIN"]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };
