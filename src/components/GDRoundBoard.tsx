import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GDButton } from "./GDButton";
import GDSelectLabel from "./GDSelectLabel";

interface Props {
  numberRound: number;
  players: string[];
  onResult?: (player: string) => void;
}

interface InfoMove {
  player: string;
  move: string;
}

const GDRoundBoard = ({ numberRound, players, onResult }: Props) => {
  const classes = useStyles();
  const [indexActive, setIndexActive] = useState(0);
  const [moveActive, setMoveActive] = useState("Scissors");
  const [infoMoves, setInfoMoves] = useState<InfoMove[]>([]);
  const onClick = useCallback(() => {
    setInfoMoves([
      ...infoMoves,
      {
        move: moveActive,
        player: players[indexActive]
      }
    ]);
    if (indexActive < players.length - 1) {
      setIndexActive(indexActive + 1);
    } else {
      //TODO: calc Result is pending
      onResult && onResult("Ale");
      setIndexActive(0);
      setInfoMoves([]);
    }
  }, [moveActive, indexActive, players]);
  const labelButton = useMemo(() => {
    return indexActive < players.length - 1 ? "next" : "play";
  }, [indexActive, players]);
  useEffect(() => {
    setMoveActive("Scissors");
  }, [infoMoves]);

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
          options={["Scissors", "Paper", "Rock"]}
          typeVariant={"primary"}
        />
      </div>
      <GDButton
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
