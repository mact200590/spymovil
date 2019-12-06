import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const GDStatistics = () => {
  const classes = useStyles();
  const arr = [
    { name: "Ale", win: 3, lost: 4 },
    { name: "Ale", win: 3, lost: 4 },
    { name: "Ale", win: 3, lost: 4 }
  ];

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h4" color={"primary"} align="left">
        {"Statistics"}
      </Typography>
      <div className={classes.row}>
        <Typography
          variant="h6"
          color={"textSecondary"}
          align="center"
          className={classes.headRow}
        >
          {"Player"}
        </Typography>
        <Typography
          variant="h6"
          color={"textSecondary"}
          align="center"
          className={classes.headRow}
        >
          {"win"}
        </Typography>
        <Typography
          variant="h6"
          color={"textSecondary"}
          align="center"
          className={classes.headRow}
        >
          {"Lost"}
        </Typography>
      </div>
      {arr.map(item => (
        <div className={classes.row}>
          <Typography
            variant="body1"
            color={"textSecondary"}
            align="center"
            className={classes.headRow}
          >
            {item.name}
          </Typography>

          <Typography
            variant="body1"
            color={"textSecondary"}
            align="center"
            className={classes.headRow}
          >
            {item.win}
          </Typography>
          <Typography
            variant="body1"
            color={"textSecondary"}
            align="center"
            className={classes.headRow}
          >
            {item.lost}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default GDStatistics;

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  headRow: {
    width: 50,
    paddingRight: 10,
    fontFamily: "sans-serif"
  }
}));
