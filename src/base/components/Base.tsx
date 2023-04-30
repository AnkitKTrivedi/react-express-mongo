import * as React from "react";
import { RouteProps } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { CircularProgress } from "@material-ui/core";
import { useAxiosInterceptor } from "../../common/utils/interceptor";

const Header = React.lazy(() => import("./common/Header"));
const Footer = React.lazy(() => import("./common/Footer"));

const Base = (props: RouteProps): JSX.Element => {
  /** calling axios interceptor hook */
  useAxiosInterceptor();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Suspense fallback={<CircularProgress />}>
        <Header />
        {props.children}
        <Footer />
      </React.Suspense>
    </ThemeProvider>
  );
};

export default Base;
