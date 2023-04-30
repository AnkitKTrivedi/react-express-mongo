import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../common/styles/theme";
import Header from "../../../common/components/Header";
import GeographyChart from "../../../common/components/GeographyChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
