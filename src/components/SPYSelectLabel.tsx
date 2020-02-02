import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Size from "../style/size";
import GDSelect from "./SPYSelect";

export type GDSelectPlayerType = "primary" | "secondary";

interface Props {
  label: string;
  defaultValue?: string;
  typeVariant: GDSelectPlayerType;
  options: string[];
  onChange?: ((value: string) => void) | undefined;
}

const SPYSelectLabel = ({
  label: namePlayer,
  typeVariant,
  options,
  onChange,
  defaultValue=""
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" color={typeVariant} align="center">
        {namePlayer}
      </Typography>
      <GDSelect
      defaultValue={defaultValue}
        typeVariant={typeVariant}
        options={options}
        onChange={onChange as any}
        styleContainer={{ minWidth: Size.box.base }}
      />
    </div>
  );
};

export default SPYSelectLabel;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  }
}));
