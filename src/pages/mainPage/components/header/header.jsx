import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    headerStyle: {
      backgroundColor: "#C0C0C0",
      display: "flex",
      justifyContent: 'center',
      margin: "0 0 15px 0",
      padding: '15px',
    },
  };
});

export const Header = () => {
  const classes = useStyles();

  return (
    <Typography variant="h2" component="h1" className={classes.headerStyle}>
      Picture of the day
    </Typography>
  );
};
