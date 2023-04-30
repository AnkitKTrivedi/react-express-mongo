import React from "react";
import { BrowserRouter } from "react-router-dom";
import Base from "./Base";
import AppRoutes from "./common/Routes";
import App from "../../App";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/* <Base>
        <AppRoutes />
      </Base> */}
      <App />
    </BrowserRouter>
  );
};

export default Router;
