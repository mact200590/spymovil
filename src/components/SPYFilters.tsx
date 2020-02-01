import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { FIELDS_API, TURBIDITY_OF_WATER } from "../utils/constant";
import { SPYButton } from "./SPYButton";
import SPYDateSelector from "./SPYDateSelector";
import { SPYInput } from "./SPYInput";
import SPYSelect from "./SPYSelect";

interface Props {
  onClick: (
    name: string,
    chlorine: string,
    turbidity: string,
    date: string,
    type: string,
    selectPh: string
  ) => void;
  onClickClear: () => void;
}

const SPYFilters = ({ onClickClear, onClick }: Props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [chlorine, setChlorine] = useState("");
  const [turbidity, setTurbidity] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [selectPh, setSelectPh] = useState("");

  const handleOnchangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const handleOnchangeChlorine = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setChlorine(event.target.value);
    },
    [setChlorine]
  );

  const handleOnchangeSelectTurbidity = useCallback(
    (value: any) => {
      setTurbidity(value);
    },
    [setTurbidity]
  );

  const handleOnchangeDate = useCallback(
    (date: any) => {
      setDate(date);
    },
    [setDate]
  );

  const handleOnchangeType = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setType(event.target.value);
    },
    [setType]
  );

  const handleOnchangeSelectPh = useCallback(
    (value: any) => {
      setSelectPh(value);
    },
    [setSelectPh]
  );

  return (
    <Container className={classes.container}>
      <Box className={classes.width50}>
        <SPYInput
          classNameContainer={classes.input}
          typeVariant="primary"
          placeholder="Nombre"
          label="Nombre"
          value={name}
          onChange={handleOnchangeName}
        />
        <SPYInput
          classNameContainer={classes.input}
          typeVariant="primary"
          placeholder="Cloro"
          label="Cloro"
          value={chlorine}
          onChange={handleOnchangeChlorine}
        />

        <SPYInput
          classNameContainer={classes.input}
          typeVariant="primary"
          placeholder="Tipo"
          label="Tipo"
          value={type}
          onChange={handleOnchangeType}
        />
        <SPYSelect
          label={"Turbidez"}
          styleContainer={{ marginTop: "0px", minWidth: "165px" }}
          typeVariant={"primary"}
          options={TURBIDITY_OF_WATER}
          value={turbidity}
          onChange={handleOnchangeSelectTurbidity}
        />
        <SPYSelect
          styleContainer={{ marginTop: "10px", minWidth: "165px" }}
          label={"Elija el Ph"}
          typeVariant={"primary"}
          options={FIELDS_API}
          value={selectPh}
          onChange={handleOnchangeSelectPh}
        />
        <SPYDateSelector
          classNameContainer={classes.date}
          variant={"inline"}
          justify={"flex-start"}
          disableToolbar={false}
          id={"id-ph"}
          label={"Elija la fecha"}
          onChange={handleOnchangeDate}
        />
      </Box>
      <Box className={classes.width50}>
        <SPYButton
          style={{ margin: "1em" }}
          label={"Filtrar"}
          typeVariant={"primary"}
          fullWidth={true}
          onClick={() =>
            onClick(name, chlorine, selectPh, turbidity, date, type)
          }
        />
        <SPYButton
          style={{
            margin: "1em"
          }}
          label={"Borrar"}
          typeVariant={"primary"}
          fullWidth={true}
          onClick={() => onClickClear}
        />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    padding: "1em"
  },
  width50: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "150px"
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  button: {
    marginTop: "10px",
    marginLeft: "10px",
    maxHeight: "40px",
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  input: {
    minWidth: "150px"
  },
  date: {
    maxWidth: "165px",
    marginTop: "30px"
  }
}));

export default SPYFilters;
