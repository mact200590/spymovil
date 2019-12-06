import React, { useState } from "react";
import GDScoreBoard from "./GDScoreBoard";
import GDRoundBoard from "./GDRoundBoard";
import { makeStyles } from "@material-ui/styles";

interface Props {
  players: string[];
}

const GDUnionRoundScoreView = ({ players }: Props) => {
  const [numberRoundActive, setNumberRoundActive] = useState(1);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <GDRoundBoard
          numberRound={numberRoundActive}
          players={players}
          onResult={winner => {
            console.log(winner);
          }}
        />
      </div>
      <div className={classes.score}>
        <GDScoreBoard
          tittle={"Score Board"}
          scores={[
            { score: 1, winner: "Alejandro" },
            { score: 1, winner: "Alejandro" },
            { score: 1, winner: "Alejandro" },
            { score: 1, winner: "Alejandro" },
            { score: 1, winner: "Alejandro" },
            { score: 1, winner: "Alejandro" }
          ]}
        />
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
