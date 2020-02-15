import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
import React from "react";
import { DATE_FORMAT } from "../utils/constant";
type VariantDate = "dialog" | "inline" | "static" | undefined;
type VariantJustify =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | undefined;

interface Props {
  variant: VariantDate;
  justify: VariantJustify;
  disableToolbar: boolean;
  id: string;
  label: string;
  classNameContainer: string;
  onChange: (date: Date | null) => void;
}

const SPYDateSelector = ({
  classNameContainer,
  variant = "inline",
  justify = "space-around",
  id,
  label,
  disableToolbar,
  onChange
}: Props) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid className={classNameContainer} container justify={justify}>
        <KeyboardDatePicker
          disableToolbar={disableToolbar}
          variant={variant}
          format={DATE_FORMAT}
          id={id}
          label={label}
          value={selectedDate}
          onChange={date => {
            handleDateChange(date);
            onChange(date);
          }}
          className={classes.container}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%"
  }
}));

export default SPYDateSelector;
