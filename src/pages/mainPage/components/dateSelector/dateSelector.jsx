import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const useStyles = makeStyles(() => {
  return {
    dateSelect: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 0px',
    },
  };
});

export const DateSelect = (props) => {
  const classes = useStyles();
  const { dateSelected, setDateSelected } = props;

  return (
    <div className={classes.dateSelect}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="yyyy/MM/dd"
          label="Select date"
          mask="____/__/__"
          onChange={(newValue) => {
            setDateSelected(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          value={dateSelected}
        />
      </LocalizationProvider>
    </div>
  );
};
