import { Grid, makeStyles, Paper, List } from "@material-ui/core";
import React from "react";

type Props = {
  height: number
};

export const PYLayoutVerticalList: React.FC<Props> = ({ children, height }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      style={{  minHeight: 600, height, overflow: "auto" }}
    >
      <List className={classes.root}>{children}</List>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}));
