import { Box } from "@material-ui/core";
import React from "react";
import { ChildrenProps } from "../../../common/interfaces/childrenProps";

const Content: React.FC = (props: ChildrenProps): JSX.Element => {
  return <Box>{props.children}</Box>;
};

export default Content;
