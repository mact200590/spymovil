import { makeStyles } from "@material-ui/core";
import React from "react";

export const PYLayoutVerticalList: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  }
}));
