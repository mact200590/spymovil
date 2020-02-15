import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { SPYButton } from "../components/SPYButton";
import SPYPanelFilter from "../components/SPYPanelFilter";
import SPYPanelList from "../components/SPYPanelList";
import { useClearAuth } from "../hooks/auth";

const SPYPageMain = () => {
  const classes = useStyles();
  const { clearAuth } = useClearAuth();
  return (
    <Container className={classes.container}>
      <SPYPanelFilter />

      <SPYPanelList />

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
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    containerButton: {
      position: "absolute",
      bottom: 0,
      [theme.breakpoints.down("sm")]: {
        top: 0,
        right: 0
      }
    }
  })
);

export default SPYPageMain;
