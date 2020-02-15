import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import SPYText from "../components/SPYText";
import SPYFilterContainer from "../containers/SPYFilterContainer";
import SPYOrderContainer from "../containers/SPYOrderContainer";

const SPYPanelFilter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.width50Container}>
      <Box className={classes.width50}>
        <SPYFilterContainer />
      </Box>

      <Box className={classes.width50}>
        <SPYOrderContainer />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    width50Container: {
      height: "100%",
      width: "50%",
      padding: "1em",
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        width: "100%",
        padding: "0"
      },
      [theme.breakpoints.only("sm")]: {
        width: "100%",
      }
    },
    width50: {
      height: "100%",
      width: "50%",
      padding: "1em",
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    }
  })
);

export default SPYPanelFilter;
