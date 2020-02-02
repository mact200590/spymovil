import { makeStyles } from "@material-ui/styles";
import React from "react";
import SPYSelect from "../components/SPYSelect";
import { SelectType } from "./SPYSelect";

const phScale = [
  "name",
  "chlorine",
  "ph",
  "turbidity",
  "date",
  "typeData",
];
interface Props {
  typeVariant: SelectType;
  onChange:
    | (((value: string) => void) &
        ((event: React.ChangeEvent<{ value: unknown }>) => void))
    | undefined;
  title: string;
  defaultValue?: string;
  styleContainer?: React.CSSProperties | undefined;
}

const SPYOrderBy = ({
  defaultValue = "",
  typeVariant,
  onChange,
  styleContainer
}: Props) => {
  const classes = useStyles();
  return (
    <SPYSelect
      styleContainer={{
        ...styleContainer,
        marginLeft: "0px",
        marginRight: "0px"
      }}
      className={classes.tittle}
      typeVariant={typeVariant}
      options={phScale}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

const useStyles = makeStyles(theme => ({
  tittle: {
    fontFamily: "Times New Roman",
  }
}));

export default SPYOrderBy;
