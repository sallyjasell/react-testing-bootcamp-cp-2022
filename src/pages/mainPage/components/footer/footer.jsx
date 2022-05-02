import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    footerStyle: {
      backgroundColor: '#C0C0C0',
      display: "flex",
      justifyContent: 'center',
      padding: "10px",
    },
  };
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" component="h1" className={classes.footerStyle}>
      Project created during Wizeline Academy React Testing Bootcamp
    </Typography>
  );
};
