import { makeStyles } from "@material-ui/styles";
import React, { useCallback, useState } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import GDRoundBoard from "../components/GDRoundBoard";
import GDScoreBoard, { Score } from "../components/GDScoreBoard";
import { GDSpinner } from "../components/GDSpinner";
import { Player, useUseUpdatePlayerMutation } from "../types";

const GDBoardGame = ({ location: { state } }: RouteComponentProps<{}>) => {
  const [numberRoundActive, setNumberRoundActive] = useState(1);
  const [scores, setScores] = useState<Score[]>([]);
  const [winner, setWinner] = useState<string | undefined>(undefined);
  const [updatePlayer, { loading }] = useUseUpdatePlayerMutation();

  const onResult = useCallback(
    (winnersRound: string[]) => {
      const winnersRoundMap: Score[] = winnersRound.map(w => ({
        score: numberRoundActive,
        winner: w
      }));
      const allScores = [...scores, ...winnersRoundMap];
      const winnersGame: string[] = [];
      allScores.forEach(({ winner }, iM) => {
        const matchWon = allScores.filter(score => winner === score.winner);
        matchWon.length >= 3 && winnersGame.push(winner);
      });

      if (winnersGame.length === 0) {
        setScores(allScores);
        setNumberRoundActive(numberRoundActive + 1);
      } else {
        // only the first winner was saved to simplify
        const finder = state.players.find(
          (p: Player) => p.name === winnersGame[0]
        );
        updatePlayer({
          variables: { id: finder.id, win: `${parseInt(finder.win) + 1}` }
        }).then(() => {
          setWinner(winnersGame[0]);
        });
        setNumberRoundActive(1);
        setScores([]);
      }
    },
    [numberRoundActive, scores, state.players, updatePlayer]
  );
  const classes = useStyles();

  if (loading) return <GDSpinner />;

  if (winner)
    return (
      <Redirect
        to={{
          pathname: "/result",
          state: { winner: winner }
        }}
      />
    );

  return (
    <div className={classes.container}>
      <div>
        <GDRoundBoard
          numberRound={numberRoundActive}
          players={
            state && state.players
              ? state.players.map((p: Player) => p.name)
              : []
          }
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
