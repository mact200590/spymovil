import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { SPYButton } from "../components/SPYButton";
import SPYText from "../components/SPYText";
import SPYCardListContainer from "../containers/SPYCardListContainer";
import SPYFilterContainer from "../containers/SPYFilterContainer";
import SPYOrderContainer from "../containers/SPYOrderContainer";
import { useClearAuth } from "../hooks/auth";

const SPYPageMain = () => {
  const classes = useStyles();
  const { clearAuth } = useClearAuth();
  return (
    <Container className={classes.container}>
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

      <Container className={classes.width50}>
        <Box className={classes.result}>
          <SPYText title={"Result"} />
        </Box>
        <Box className={classes.height100}>
          <SPYCardListContainer />
        </Box>
      </Container>
      <Box className={classes.containerButton}>
        <SPYButton
          style={{
            margin: "1em"
          }}
          label={"Logout"}
          typeVariant={"primary"}
          fullWidth={true}
          onClick={clearAuth}
        />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    width50New: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "center",
      minWidth: "150px"
    },
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      maxWidth: "100%"
    },
    width50: {
      height: "100%",
      width: "50%",
      padding: "1em"
    },
    height70: {
      height: "70%",
      width: "100%"
    },
    height30: {
      height: "30%",
      width: "50%"
    },
    width100: {
      width: "100%"
    },
    height100: {
      height: "100%"
    },
    order: {
      textAlign: "center"
    },
    containerOrder: {
      display: "flex",
      flexDirection: "row",
      padding: "1em",
      borderWidth: 1,
      borderTopStyle: "solid",
      borderColor: "grey"
    },
    result: {
      height: 50,
      textAlign: "center"
    },
    containerButton: {
      position: "absolute",
      bottom: 0
    }
  })
);

export default SPYPageMain;
