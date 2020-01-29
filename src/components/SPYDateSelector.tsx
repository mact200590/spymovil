import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker, 
} from '@material-ui/pickers';

type VariantDate = "dialog" | "inline" | "static" | undefined
type VariantJustify= "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined

interface Props {
  variant: VariantDate
  justify: VariantJustify
  disableToolbar:boolean
  format: string
  id:string
  label:string 
  onChange:(date:Date|null)=>void
}


const SPYDateSelector=({variant="inline",justify="space-around",format,id,label,disableToolbar,onChange}:Props)=> {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify={justify}>
        <KeyboardDatePicker
          disableToolbar={disableToolbar}
          variant={variant}
          format={format}
          id={id}
          label={label}
          value={selectedDate}
          onChange={(date)=>{
            handleDateChange(date);
            onChange(date)     
          }
        }
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default SPYDateSelector;