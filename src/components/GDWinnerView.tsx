import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { GDButton } from "./GDButton";

interface Props {
  winner: string;
}

const GDWinnerView = ({ winner }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        color={"textSecondary"}
        align="center"
      >
        {"We have a WINNER!!"}
      </Typography>
      <Typography
        className={classes.title}
        variant="h4"
        color={"textSecondary"}
        align="center"
      >
        {`${winner} is the new EMPEROR!`}
      </Typography>
      <div className={classes.containerButton}>
        <GDButton
          style={{ maxWidth: 250 }}
          label={"Play Again"}
          typeVariant="primary"
          fullWidth={true}
          type="submit"
          onClick={() => {}}
        />
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
    marginTop: theme.spacing(4),
    justifyContent: "center"
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}));
