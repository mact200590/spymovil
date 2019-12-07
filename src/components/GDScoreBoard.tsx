import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

export type Score = { score: number; winner: string };

interface Props {
  scores: Score[];
  tittle: string;
}

const GDScoreBoard = ({ scores, tittle }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h4" color={"primary"} align="center">
        {tittle}
      </Typography>
      <div className={classes.row}>
        <Typography
          variant="h6"
          color={"textSecondary"}
          align="center"
          className={classes.round}
        >
          {"Round"}
        </Typography>
        <Typography
          variant="h6"
          color={"textSecondary"}
          align="center"
          className={classes.winner}
        >
          {"Winner"}
        </Typography>
      </div>
      {scores.map((score, i) => (
        <div key={i} className={classes.row}>
          <Typography
            variant="body1"
            color={"textSecondary"}
            align="center"
            className={classes.round}
          >
            {score.score}
          </Typography>
          <Typography
            variant="body1"
            color={"textSecondary"}
            align="center"
            className={classes.winner}
          >
            {score.winner}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default GDScoreBoard;

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  score: {
    marginRight: 70
  },
  round: {
    width: 100
  },
  winner: {
    fontFamily: "sans-serif"
  }
}));
