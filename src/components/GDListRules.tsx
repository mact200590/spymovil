import { List, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Rule } from "../page/GDConfiguration";

interface Props {
  rules: Rule[];
}

const GDListRules = ({ rules }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography
        variant="h4"
        color={"textPrimary"}
        align="center"
        className={classes.tittle}
      >
        New Rules
      </Typography>
      <Paper style={{ maxHeight: 400, overflow: "auto", minWidth: 450 }}>
        <List>
          {rules.map(item => (
            <div className={classes.row}>
              <Typography
                variant="h6"
                color={"secondary"}
                align="center"
                className={classes.move}
              >
                {item.move}
              </Typography>
              <Typography
                variant="body1"
                color={"secondary"}
                align="center"
                className={classes.middle}
              >
                => KILLS =>
              </Typography>
              <Typography
                variant="h6"
                color={"secondary"}
                align="center"
                className={classes.kill}
              >
                {item.kills}
              </Typography>
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default GDListRules;

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column"
  },
  tittle: {
    paddingBottom: theme.spacing(2)
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  move: {
    display: "flex",
    flexDirection: "column",
    paddingRight: theme.spacing(2)
  },
  middle: {
    fontSize: 25,
    paddingRight: theme.spacing(2)
  },
  kill: {
    paddingBottom: theme.spacing(2)
  }
}));
