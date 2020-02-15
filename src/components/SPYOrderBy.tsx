import { makeStyles } from "@material-ui/styles";
import React from "react";
import SPYSelect from "../components/SPYSelect";
import { SelectType } from "./SPYSelect";
import { Container, Box } from "@material-ui/core";
import SPYText from "./SPYText";

const phScale = ["name", "chlorine", "ph", "turbidity", "date", "typeData"];
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
    <Container className={classes.container}>
      <Box>
        <SPYText title={"Order"} fontSize={25} />
      </Box>
      <SPYSelect
        label={"Order"}
        styleContainer={{ minWidth: "165px" }}
        className={classes.tittle}
        typeVariant={typeVariant}
        options={phScale}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  tittle: {
    fontFamily: "Times New Roman"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    padding: 0
  }
}));

export default SPYOrderBy;
