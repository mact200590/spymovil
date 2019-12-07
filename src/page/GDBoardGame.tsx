import { makeStyles } from "@material-ui/styles";
import React, { useCallback, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import GDRoundBoard from "../components/GDRoundBoard";
import GDScoreBoard, { Score } from "../components/GDScoreBoard";

const GDBoardGame = ({ location: { state } }: RouteComponentProps<{}>) => {
  const [numberRoundActive, setNumberRoundActive] = useState(1);
  const [scores, setScores] = useState<Score[]>([]);
  const onResult = useCallback(
    (winnersRound: string[]) => {
      const winnersRoundMap: Score[] = winnersRound.map(w => ({
        score: numberRoundActive,
        winner: w
      }));
      const allScores = [...scores, ...winnersRoundMap];
      const winnersGame = [];
      allScores.forEach(({ winner }, iM) => {
        const matchWon = allScores.filter(
          score => winner === score.winner
        );
        matchWon.length >= 3 && winnersGame.push(winner);
      });

      if (winnersGame.length === 0) {
        setScores(allScores);
        setNumberRoundActive(numberRoundActive + 1);
      } else {
        //TODO: show success view
        setNumberRoundActive(1);
        setScores([]);
      }
    },
    [numberRoundActive]
  );
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <GDRoundBoard
          numberRound={numberRoundActive}
          players={state && state.players ? state.players : []}
          onResult={onResult}
        />
      </div>
      <div className={classes.score}>
        <GDScoreBoard tittle={"Score Board"} scores={scores} />
      </div>
    </div>
  );
};

export default GDBoardGame;

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
