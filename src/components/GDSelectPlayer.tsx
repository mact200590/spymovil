import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Size from "../style/size";
import GDSelect from "./GDSelect";

export type GDSelectPlayerType = "primary" | "secondary";

interface Props {
  label: string;
  typeVariant: GDSelectPlayerType;
  options: string[];
  onChange?: ((value: string) => void) | undefined;
}

const GDSelectPlayer = ({
  label: namePlayer,
  typeVariant,
  options,
  onChange
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" color={typeVariant} align="center">
        {namePlayer}
      </Typography>
      <GDSelect
        typeVariant={typeVariant}
        options={options}
        onChange={onChange as any}
        styleContainer={{ minWidth: Size.box.base }}
      />
    </div>
  );
};

export default GDSelectPlayer;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  }
}));
