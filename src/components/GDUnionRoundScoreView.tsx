import React, { useState, useCallback } from "react";
import GDScoreBoard, { Score } from "./GDScoreBoard";
import GDRoundBoard from "./GDRoundBoard";
import { makeStyles } from "@material-ui/styles";

interface Props {
  players: string[];
}

const GDUnionRoundScoreView = ({ players }: Props) => {
  const [numberRoundActive, setNumberRoundActive] = useState(1);
  const [scores, setScores] = useState<Score[]>([]);
  const onResult = useCallback(
    (winner: string) => {
      setScores([
        ...scores,
        {
          score: numberRoundActive,
          winner
        }
      ]);
      //TODO: calc who is the winner
      if (numberRoundActive < 3) {
        setNumberRoundActive(numberRoundActive + 1);
      } else {
        //TODO: show success view
        setNumberRoundActive(1);
        setScores([]);
      }
    },
    [numberRoundActive]
  );
console.log({numberRoundActive, scores})
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <GDRoundBoard
          numberRound={numberRoundActive}
          players={players}
          onResult={onResult}
        />
      </div>
      <div className={classes.score}>
        <GDScoreBoard tittle={"Score Board"} scores={scores} />
      </div>
    </div>
  );
};

export default GDUnionRoundScoreView;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "center"
  },
  score: {
    paddingLeft: 90
  }
}));
