import React from "react";
import { Box, Grid } from "@material-ui/core";
import SubHeader from "./common/SubHeader";

const Home = (): JSX.Element => {
  return (
    <Box>
      <SubHeader />
      <Grid container>
        <Grid item xs={3} style={{ height: "100vh", backgroundColor: "red" }}>
          Home componets1
        </Grid>
        <Grid item xs={9} style={{ height: "100vh", backgroundColor: "yellow" }}>
          Home componets2
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
