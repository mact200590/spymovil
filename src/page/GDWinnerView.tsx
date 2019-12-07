import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { GDButton } from "../components/GDButton";
import { Link, RouteComponentProps } from "react-router-dom";


const GDWinnerView = ({ location: { state } }: RouteComponentProps<{}>) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        color={"textSecondary"}
        align="center"
      >
        {state && state.winner && "We have a WINNER!!"}
      </Typography>
      <Typography
        className={classes.title}
        variant="h4"
        color={"textSecondary"}
        align="center"
      >
        { state && state.winner && `${state.winner} is the new EMPEROR!`}
      </Typography>
      <div className={classes.containerButton}>
        <Link to="/" style={{marginBottom: 10}}>
          <GDButton
            style={{ width: 150 }}
            label={"Play Again"}
            typeVariant="primary"
            fullWidth={true}
            type="submit"
            onClick={() => {}}
          />
        </Link>
        <Link to="/statistics" style={{marginBottom: 10}}>
          <GDButton
            style={{ width: 150 }}
            label={"Statistics"}
            typeVariant="secondary"
            fullWidth={true}
            type="submit"
            onClick={() => {}}
          />
        </Link>
        <Link to="/config">
          <GDButton
            style={{ width: 150 }}
            label={"Config"}
            typeVariant="secondary"
            fullWidth={true}
            type="submit"
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
};

export default GDWinnerView;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  containerButton: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}));
