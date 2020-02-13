import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import SPYText from "../components/SPYText";
import SPYFilterContainer from "../containers/SPYFilterContainer";
import SPYOrderContainer from "../containers/SPYOrderContainer";

const SPYPanelFilter = () => {
  const classes = useStyles();
  return (
    <Container className={classes.width50}>
      <Box className={classes.height70}>
        <SPYFilterContainer />
      </Box>

      <Box className={classes.width100}>
        <Container className={classes.containerOrder}>
          <Box className={classes.width50New}>
            <SPYOrderContainer />
          </Box>
          <Box className={classes.width50New}>
            <SPYText title={"Order"} />
          </Box>
        </Container>
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
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    width50New: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "center",
      minWidth: "150px"
    },
    height70: {
      height: "70%",
      width: "100%"
    },
    width100: {
      width: "100%"
    },
    containerOrder: {
      display: "flex",
      flexDirection: "row",
      padding: "1em",
      borderWidth: 1,
      borderTopStyle: "solid",
      borderColor: "grey"
    }
  })
);

export default SPYPanelFilter;
