import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

export const PYLayoutVerticalList: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column">
      {children}
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}));
