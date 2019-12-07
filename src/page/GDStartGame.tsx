import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import GDAddValues from "../components/GDAddValues";
import { GDButton } from "../components/GDButton";
import GDSelectLabel from "../components/GDSelectLabel";
import { GDSpinner } from "../components/GDSpinner";
import { useUseGetAllPlayersQuery, useUseAddPlayerMutation } from "../types";

const GDStartGame = () => {
  const classes = useStyles();
  const [valuePlayer1, setValuePlayer1] = useState("");
  const [valuePlayer2, setValuePlayer2] = useState("");
  const { loading, error, data, refetch } = useUseGetAllPlayersQuery();
  const styleLink = useMemo(() => {
    return valuePlayer1 === "" || valuePlayer2 === ""
      ? { pointerEvents: "none" }
      : {};
  }, [valuePlayer2, valuePlayer1]);
  const players = useMemo(() => {
    return data && data.players ? data.players : [];
  }, [data]);

  const [addPlayer] = useUseAddPlayerMutation();

  if (loading) return <GDSpinner />;
  if (error) {
    //TODO: add notification
    console.log("error", error);
  }

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
          <GDSelectLabel
            label={"Payer 1"}
            onChange={setValuePlayer1}
            options={
              data && data.players ? data.players.map(move => move.name) : []
            }
            typeVariant={"primary"}
          />
          <GDSelectLabel
            label={"Payer 2"}
            onChange={setValuePlayer2}
            options={
              data && data.players ? data.players.map(move => move.name) : []
            }
            typeVariant={"primary"}
          />

          <Link
            style={styleLink as any}
            className="w-100"
            to={{
              pathname: "/main",
              state: {
                players: players.filter(
                  p => p.name === valuePlayer1 || p.name === valuePlayer2
                )
              }
            }}
          >
            <GDButton
              label="Start"
              typeVariant="primary"
              fullWidth={true}
              type="submit"
            />
          </Link>
        </div>
        <div>
          <GDAddValues
            labelButton="Add player"
            textPlaceHolder={"Add Player"}
            onClick={name => {
              addPlayer({ variables: { name } }).then(() => {
                refetch();
              });
            }}
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
    alignItems: "center"
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
