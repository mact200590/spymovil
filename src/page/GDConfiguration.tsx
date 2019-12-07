import React, { useState, useMemo } from "react";
import GDAddValues from "../components/GDAddValues";
import { makeStyles } from "@material-ui/core/styles";
import GDRules from "../components/GDRules";
import { Typography } from "@material-ui/core";
import GDListRules from "../components/GDListRules";
import { useUseAddMovementMutation, useUseGetAllRulesQuery, useUseGetAllMovementsQuery } from "../types";
import { GDSpinner } from "../components/GDSpinner";

interface Props {
  addRule?: (move: string, skills: string) => void | undefined;
}

export type Rule = { move: string; kill: string };

const GDConfiguration = ({ addRule }: Props) => {
  const classes = useStyles();
  const [addMovement, {loading}] = useUseAddMovementMutation();
  const {
    loading: loadingRules,
    error: errorRules,
    data: dataRules,
  } = useUseGetAllRulesQuery();
  const { loading: loadingMove, data, refetch } = useUseGetAllMovementsQuery();
  const rules = useMemo(() => {
    if (!dataRules || !dataRules.rules) return [];
    return dataRules.rules.map(r => ({
      id: r.id,
      move: r.move.name,
      kill: r.kill.name
    }));
  }, [dataRules]);

  if ( loadingRules || loadingMove) return <GDSpinner />;
  
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
            movements={(data && data.movements) ? data.movements.map(move => move.name) : []}
          />
          <Typography
            style={{ marginTop: 100 }}
            variant="h4"
            color={"textPrimary"}
            align="center"
          >
            Add Move
          </Typography>
          <GDAddValues
            labelButton={"ADD"}
            typeVariant={"primary"}
            onClick={(name) => {
              addMovement({ variables: { name } }).then(() => {
                refetch();
              });
            }}
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
