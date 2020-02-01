import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import SPYCardListContainer from "../components/SPYCardListContainer";
import SPYFilters from "../components/SPYFilters";
import SPYOrderBy from "../components/SPYOrderBy";
import SPYText from "../components/SPYText";

const SPYPageMain = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Container className={classes.width50}>
        <Box className={classes.height70}>
          <SPYFilters onClick={() => {}} onClickClear={() => {}} />
        </Box>

        <Box className={classes.width100}>
          <Container className={classes.containerOrder}>
            <Box className={classes.width50New}>
              <SPYOrderBy
                typeVariant={"primary"}
                title={"Ordenar"}
                onChange={() => {}}
                styleContainer={{ marginTop: "10px", minWidth: "165px" }}
              />
            </Box>
            <Box className={classes.width50New}>
              <SPYText title={"Ordenar"} />
            </Box>
          </Container>
        </Box>
      </Container>

      <Container className={classes.width50}>
        <div className={classes.result}>
          <SPYText title={"Resultado"} />
        </div>
        <SPYCardListContainer />
      </Container>
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
    result: {
      textAlign: "center",
      marginTop: 25
    },
    width100: {
      width: "100%"
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
    }
  })
);

export default SPYPageMain;
