import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useCallback, useMemo, useState } from "react";
import { FilterState } from "../redux/action";
import { INCORRECT_CHLORINE, TURBIDITY_OF_WATER } from "../utils/constant";
import { SPYButton } from "./SPYButton";
import SPYDateSelector from "./SPYDateSelector";
import { SPYInput } from "./SPYInput";
import SPYSelect from "./SPYSelect";

interface Props {
  filter: FilterState;
  onClick: (filter: FilterState) => void;
  onClickClear: () => void;
}

const SPYFilters = ({ filter, onClickClear, onClick }: Props) => {
  const classes = useStyles();
  const [name, setName] = useState(filter.name);
  const [typeData, setTypeData] = useState(filter.typeData);
  const [chlorine, setChlorine] = useState(filter.chlorine);
  const [turbidity, setTurbidity] = useState(filter.turbidity);
  const [date, setDate] = useState(filter.date);
  const [ph, setPh] = useState(filter.ph);
  const chlorineError = useMemo(() => {
    if (chlorine && isNaN(chlorine)) {
      return INCORRECT_CHLORINE;
    } else {
      return;
    }
  }, [chlorine]);

  const onClickCallBack = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (chlorineError) return;
      const filter: FilterState = {};
      filter.name = name;
      filter.typeData = typeData;
      filter.chlorine = chlorine;
      filter.turbidity = turbidity;

      onClick(filter);
    },
    [onClick, chlorineError, name, typeData, chlorine, turbidity]
  );

  const handleOnchangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const handleOnchangeChlorine = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const float = parseFloat(event.target.value);
      if (event.target.value === "" || isNaN(float)) {
        setChlorine(event.target.value as any);
      } else {
        setChlorine(float);
      }
    },
    [setChlorine]
  );

  const handleOnchangeSelectTurbidity = useCallback(
    (value: any) => {
      setTurbidity(value === "Limpios" ? 0 : 10);
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
      setTypeData(event.target.value);
    },
    [setTypeData]
  );

  // const handleOnchangeSelectPh = useCallback(
  //   (value: any) => {
  //     setSelectPh(value);
  //   },
  //   [setSelectPh]
  // );
  
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
          error={chlorineError}
          onChange={handleOnchangeChlorine}
        />

        <SPYInput
          classNameContainer={classes.input}
          typeVariant="primary"
          placeholder="Tipo"
          label="Tipo"
          value={typeData}
          onChange={handleOnchangeType}
        />
        <SPYSelect
          label={"Turbidez"}
          styleContainer={{ marginTop: "0px", minWidth: "165px" }}
          typeVariant={"primary"}
          options={TURBIDITY_OF_WATER}
          defaultValue={turbidity === 0 ? "Limpios" : "Sucios"}
          onChange={handleOnchangeSelectTurbidity}
        />
        {/* <SPYSelect
          styleContainer={{ marginTop: "10px", minWidth: "165px" }}
          label={"Elija el Ph"}
          typeVariant={"primary"}
          options={FIELDS_API}
          value={selectPh}
          onChange={handleOnchangeSelectPh}
        /> */}
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
          onClick={onClickCallBack}
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
