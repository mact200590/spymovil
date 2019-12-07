import React, { useState } from "react";
import GDAddValues from "../components/GDAddValues";
import { makeStyles } from "@material-ui/core/styles";
import GDRules from "../components/GDRules";
import { Typography } from "@material-ui/core";
import GDListRules from "../components/GDListRules";

interface Props {
  addRule?: (move: string, skills: string) => void | undefined;
  onClick?: (value: string) => void;
}

export type Rule = { move: string; kills: string };

const GDConfiguration = ({ addRule, onClick }: Props) => {
  const [rules, setRules] = useState<Rule[]>([]);
  const classes = useStyles();
  //TODO: Here do something and tell to your father
  onClick = value => {
    console.log(`Insert this value in the BD and tell to your DAD ${value}`);
  };
  //TODO: Here add the rule to the BD and print it
  addRule = (move, skills) => {
    console.log(
      `Print this and add to BD , also tell to your DAD ${move} ${skills}`
    );
    setRules([...rules, { move: move, kills: skills }]);
  };

  return (
    <div className={classes.mainContainer}>
      <Typography
        variant="h2"
        color={"textPrimary"}
        align="center"
        className={classes.tittle}
      >
        Configuration
      </Typography>
      <div className={classes.row}>
        <div className={classes.column}>
          <Typography variant="h4" color={"textPrimary"} align="center">
            Add Rule
          </Typography>
          <GDRules
            labelButton={"ADD"}
            typeVariant={"primary"}
            onClick={addRule}
            textPlaceHolder={"Add Move"}
          />
          <Typography style={{marginTop: 100}} variant="h4" color={"textPrimary"} align="center">
            Add Move
          </Typography>
          <GDAddValues
            labelButton={"ADD"}
            typeVariant={"primary"}
            onClick={onClick}
            textPlaceHolder={"Add Move"}
          />
        </div>
        <div className={classes.column}>
          <GDListRules rules={rules} />
        </div>
      </div>
    </div>
  );
};

export default GDConfiguration;

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    paddingRight: theme.spacing(8)
  },
  tittle: {
    paddingBottom: theme.spacing(12)
  }
}));
