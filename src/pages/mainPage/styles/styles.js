import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    imageAndInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    imageColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
    },
    infoColumn: {
      alignSelf: 'center',
      margin: '0 15px',
      padding: '10px',
      width: '50%',
    },
    mainContent: {
      backgroundColor: "#C0C0C0",
      margin: "15px 0 15px 0",
    },
    pageContent: {
      height: 'fit-content',
      padding: '20px',
    },
  };
});
