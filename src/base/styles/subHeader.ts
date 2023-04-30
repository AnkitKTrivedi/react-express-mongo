import { createStyles, makeStyles } from "@material-ui/core";

export const SubHeaderStyles = makeStyles(() =>
  createStyles({
    conatiner: {
      height: "48px",
      "& .MuiTextField-root": { padding: "4px", right: 0, position: "absolute" },
    },
  }),
);
