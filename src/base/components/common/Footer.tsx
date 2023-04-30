import { Typography } from "@material-ui/core";
import React from "react";
import { FooterStyles } from "../../styles/footer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  const classes = FooterStyles();
  return (
    <footer className={classes.conatiner}>
      <p>
        Author: abc
        <br />
        <a href="mailto:abc@example.com">abc@example.com</a>
      </p>
      <Copyright />
    </footer>
  );
};

export default Footer;
