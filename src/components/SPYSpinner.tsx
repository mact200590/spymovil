import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

export const SPYSpinner: React.FC = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} />;
};

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));
