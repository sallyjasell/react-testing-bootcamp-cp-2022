import React from "react";
import { CardMedia, Typography } from "@mui/material";
import { useStyles } from "./styles/styles";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { DateSelect } from "./components/dateSelector/dateSelector";
import { useGetDate } from "./hooks/useGetDate";

export const CreateMainPage = () => {
  const classes = useStyles();
  const { errors, pictureOfTheDay, setDateSelected, dateSelected } = useGetDate();

  return (
    <>
      <div className={classes.pageContent}>
        <Header />
        <div className={classes.mainContent}>
          <DateSelect dateSelected={dateSelected} setDateSelected={setDateSelected} />
          <div className={classes.imageAndInfo}>
            <div className={classes.imageColumn}>
              <Typography
                aria-label="Image Title"
                component="h1"
                textAlign="center"
                variant="h7"
              >
                {pictureOfTheDay.title ||
                  (errors === true
                    ? "There was an error, please try again."
                    : errors)}
              </Typography>
              <Typography
                aria-label="Image Date"
                component="h1"
                textAlign="end"
                typeof="date"
              >
                {pictureOfTheDay.date || null}
              </Typography>
              {pictureOfTheDay.url && (
                <CardMedia
                  alt="Image Selected"
                  component="img"
                  src={pictureOfTheDay.url}
                />
              )}
            </div>
            <div className={classes.infoColumn}>
              <Typography
                aria-label="Image selected text"
                component="h2"
                variant="body2"
              >
                {pictureOfTheDay.explanation || null}
              </Typography>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
