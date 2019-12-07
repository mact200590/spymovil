import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useUseGetAllMovementsQuery, useUseGetAllRulesQuery } from "../types";
import { GDButton } from "./GDButton";
import GDSelectLabel from "./GDSelectLabel";
import { GDSpinner } from "./GDSpinner";

interface Props {
  numberRound: number;
  players: string[];
  onResult?: (player: string[]) => void;
}

interface InfoMove {
  player: string;
  move: string;
}

const GDRoundBoard = ({ numberRound, players, onResult }: Props) => {
  const classes = useStyles();
  const [indexActive, setIndexActive] = useState(0);
  const [moveActive, setMoveActive] = useState("");
  const [infoMoves, setInfoMoves] = useState<InfoMove[]>([]);
  const { loading, error, data } = useUseGetAllMovementsQuery();
  const {
    loading: loadingRules,
    error: errorRules,
    data: dataRules
  } = useUseGetAllRulesQuery();
  const rules = useMemo(() => {
    if (!dataRules || !dataRules.rules) return [];
    return dataRules.rules.map(r => ({
      id: r.id,
      move: r.move.name,
      kill: r.kill.name
    }));
  }, [dataRules]);
  const winners = useCallback(
    (infoMoves: InfoMove[]) => {
      const winners: string[] = [];
      infoMoves.forEach((move, iM) => {
        infoMoves.forEach((kill, iK) => {
          const rulesAccepted = rules.filter(
            r => r.kill === kill.move && r.move === move.move && iM !== iK
          );
          rulesAccepted.length > 0 && winners.push(move.player);
        });
      });
      return winners;
    },
    [rules]
  );
  const onClick = useCallback(() => {
    const newInfoMoves = [
      ...infoMoves,
      {
        move: moveActive,
        player: players[indexActive]
      }
    ];
    if (indexActive < players.length - 1) {
      setInfoMoves(newInfoMoves);
      setIndexActive(indexActive + 1);
    } else {
      onResult && onResult(winners(newInfoMoves));
      setIndexActive(0);
      setInfoMoves([]);
    }
  }, [moveActive, indexActive, players, infoMoves, onResult, winners]);
  const labelButton = useMemo(() => {
    return indexActive < players.length - 1 ? "next" : "play";
  }, [indexActive, players]);
  useEffect(() => {
    setMoveActive(moveActive);
  }, [infoMoves, moveActive]);
  const disable = useMemo(() => moveActive === "", [moveActive]);

  if (loading || loadingRules) return <GDSpinner />;
  if (error || errorRules) {
    //TODO: add notification
    console.log("error", error);
  }

  return (
    <div className={classes.container}>
      <Typography variant="h4" color={"textSecondary"} align="center">
        {`ROUND: ${numberRound}`}
      </Typography>

      <div className={classes.containerSelect}>
        <Typography variant="h4" color={"textSecondary"}>
          {`Player: ${players[indexActive]}`}
        </Typography>
        <GDSelectLabel
          label={"Select Move"}
          onChange={setMoveActive}
          options={
            data && data.movements ? data.movements.map(move => move.name) : []
          }
          defaultValue={moveActive}
          typeVariant={"primary"}
        />
      </div>
      <GDButton
        disabled={disable}
        className={classes.button}
        label={labelButton}
        typeVariant="primary"
        fullWidth={false}
        type="submit"
        onClick={onClick}
      />
    </div>
  );
};

export default GDRoundBoard;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  containerSelect: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10)
  },
  button: {
    marginTop: theme.spacing(20)
  }
}));
