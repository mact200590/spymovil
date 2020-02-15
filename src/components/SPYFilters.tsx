import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useCallback, useMemo, useState } from "react";
import { FilterState } from "../redux/action";
import {
  INCORRECT_CHLORINE,
  TURBIDITY_OF_WATER,
  PH_VALUE
} from "../utils/constant";
import { SPYButton } from "./SPYButton";
import SPYDateSelector from "./SPYDateSelector";
import { SPYInput } from "./SPYInput";
import SPYSelect from "./SPYSelect";
import { phValueToLabel, phValueToPair } from "../utils/helper";
import SPYText from "./SPYText";

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
      const filter: FilterState = {
        name,
        typeData,
        chlorine,
        turbidity,
        ph,
        date
      };
      onClick(filter);
    },
    [onClick, chlorineError, name, typeData, chlorine, turbidity, ph, date]
  );

  const handleOnchangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const handleOnchangeChlorine = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setChlorine(event.target.value as any);
    },
    [setChlorine]
  );

  const handleOnchangeSelectTurbidity = useCallback(
    (value: any) => {
      setTurbidity(
        value === "Limpios" ? 0 : value === "Sucios" ? 10 : undefined
      );
    },
    [setTurbidity]
  );

  const handleOnchangeType = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTypeData(event.target.value);
    },
    [setTypeData]
  );

  const handleOnchangePh = useCallback(
    (value: any) => {
      setPh(phValueToPair(value));
    },
    [setPh]
  );

  const handleOnchangeDate = useCallback(
    (date: any) => {
      console.log(date);
      setDate(date);
    },
    [setDate]
  );

  return (
    <Container className={classes.container}>
      <Box>
        <SPYText title={"Filter"} fontSize={25}/>
      </Box>
      <SPYInput
        typeVariant="primary"
        placeholder="Name"
        label="Name"
        value={name}
        onChange={handleOnchangeName}
        fullWidth
      />
      <SPYInput
        typeVariant="primary"
        placeholder="Chlorine"
        label="Chlorine"
        value={chlorine}
        error={chlorineError}
        onChange={handleOnchangeChlorine}
        fullWidth
      />

      <SPYInput
        typeVariant="primary"
        placeholder="Type"
        label="Type"
        value={typeData}
        onChange={handleOnchangeType}
        fullWidth
      />
      <SPYSelect
        label={"Turbidity"}
        styleContainer={{ marginTop: "0px", minWidth: "165px" }}
        typeVariant={"primary"}
        options={TURBIDITY_OF_WATER}
        defaultValue={
          turbidity === 0 ? "Limpios" : turbidity === 10 ? "Sucios" : undefined
        }
        onChange={handleOnchangeSelectTurbidity}
      />
      <SPYSelect
        styleContainer={{ minWidth: "165px" }}
        label={"Ph"}
        typeVariant={"primary"}
        options={PH_VALUE}
        value={phValueToLabel(ph).label}
        onChange={handleOnchangePh}
      />
      <SPYDateSelector
        classNameContainer={classes.date}
        variant={"inline"}
        justify={"flex-start"}
        disableToolbar={false}
        id={"id-ph"}
        label={""}
        onChange={handleOnchangeDate}
      />
      <SPYButton
        label={"Filter"}
        typeVariant={"primary"}
        fullWidth
        onClick={onClickCallBack}
        className={classes.button}
      />
      <SPYButton
        label={"Clear"}
        typeVariant={"primary"}
        fullWidth
        onClick={onClickClear}
        className={classes.button}
      />
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    padding: 0
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  button: {
    marginTop: "10px",
    maxHeight: "40px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 100
  },
  date: {
    marginBottom: "1em",
    marginTop: "1em"
  }, 
  title: {
    fontSize: 16,
  }
}));

export default SPYFilters;
