import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Size from "../style/size";
import { GDButton } from "./GDButton";
import GDSelect from "./GDSelect";
import { Rule } from "../page/GDConfiguration";

export type GDAddValuesType = "primary" | "secondary";

interface Props {
  textPlaceHolder: string;
  labelButton: string;
  onClick?: (move: string, skills: string) => void;
  typeVariant?: GDAddValuesType;
  movements: string[];
}

const GDRules = ({
  textPlaceHolder,
  onClick,
  labelButton,
  typeVariant = "primary",
  movements
}: Props) => {
  const classes = useStyles();
  const [move, setMove] = useState("Scissors");
  const [kill, setKills] = useState("Scissors");

  return (
    <div className={classes.container}>
      <GDSelect
        label={"Add move"}
        typeVariant={typeVariant}
        options={movements} //data && data.movements ? data.movements.map(move => move.name) : []
        onChange={setMove as any}
        styleContainer={{ minWidth: Size.box.base }}
      />
      <GDSelect
        label={"Add kill"}
        typeVariant={typeVariant}
        options={movements}
        onChange={setKills as any}
        styleContainer={{ minWidth: Size.box.base }}
      />

      <GDButton
        className={classes.button}
        label={labelButton}
        typeVariant={typeVariant}
        fullWidth={false}
        type="submit"
        onClick={() => {
          onClick && onClick(move, kill);
        }}
      />
    </div>
  );
};
export default GDRules;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  button: {
    marginTop: 25,
    maxHeight: 35,
    marginLeft: 5
  }
}));
