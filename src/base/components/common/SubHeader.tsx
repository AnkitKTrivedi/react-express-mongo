import React from "react";
import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { SubHeaderStyles } from "../../styles/subHeader";

const SubHeader = (): JSX.Element => {
  const classes = SubHeaderStyles();

  return (
    <Box className={classes.conatiner}>
      <TextField
        id="search-bar"
        onInput={(e) => {}}
        variant="outlined"
        placeholder="Search..."
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default SubHeader;
