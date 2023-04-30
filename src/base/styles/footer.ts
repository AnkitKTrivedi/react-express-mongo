import { createStyles, makeStyles } from "@material-ui/core";

export const FooterStyles = makeStyles(() =>
  createStyles({
    conatiner: {
      textAlign: "center",
      backgroundColor: "#121212",
      bottom: "0",
      height: 100,
      //position: "fixed",
      width: "100%",
      "& >p": {
        color: "#fff",
      },
    },
  }),
);
