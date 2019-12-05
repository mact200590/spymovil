import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import GDAddValues from "../components/GDAddValues";
import { GDButton } from "../components/GDButton";
import GDSelectPlayer from "../components/GDSelectPlayer";

const GDStartGame = () => {
  const classes = useStyles();
  const [valuePlayer1, setValuePlayer1] = useState("");
  const [valuePlayer2, setValuePlayer2] = useState("");

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        color={"primary"}
        align="center"
      >
        {"Enter Player's Name "}
      </Typography>
      <div className={classes.containerForm}>
        <div className={classes.containerPlayer}>
          <GDSelectPlayer
            label={"Payer 1"}
            onChange={setValuePlayer1}
            options={["Scissors", "Paper", "Rock"]}
            typeVariant={"primary"}
          />
          <GDSelectPlayer
            label={"Payer 2"}
            onChange={setValuePlayer2}
            options={["Scissors", "Paper", "Rock"]}
            typeVariant={"primary"}
          />

          <GDButton
            label="Start"
            typeVariant="primary"
            fullWidth={true}
            type="submit"
            onClick={() => {
              console.log("Value Player", valuePlayer1, valuePlayer2);
            }}
          />
        </div>
        <div>
          <GDAddValues
            labelButton="Add player"
            textPlaceHolder={"Add Player"}
            onClick={() => console.log("Imprime en la BD")}
          />
        </div>
      </div>
    </div>
  );
};

export default GDStartGame;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5)
  },
  containerForm: {
    display: "flex",
    flexDirection: "row"
  },
  containerPlayer: {
    marginRight: theme.spacing(6)
  },
  title: {
    marginBottom: theme.spacing(10)
  }
}));