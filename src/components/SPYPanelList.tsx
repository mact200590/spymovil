import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import SPYText from "../components/SPYText";
import SPYCardListContainer from "../containers/SPYCardListContainer";

const SPYPanelList = () => {
  const classes = useStyles();
  return (
    <Container className={classes.width50}>
      <Box className={classes.result}>
        <SPYText title={"Result"} />
      </Box>
      <Box className={classes.height100}>
        <SPYCardListContainer />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    width50: {
      height: "100%",
      width: "50%",
      padding: "1em",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
      },
    },

    height100: {
      height: "100%"
    },
    result: {
      height: 50,
      textAlign: "center"
    }
  })
);

export default SPYPanelList;
