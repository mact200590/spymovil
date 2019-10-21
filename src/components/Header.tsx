import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Redirect } from "react-router";
import { useFetchPedidosYaApiTest } from "../hooks/fetch";
import { isUserLogged, logOut } from "../utils/auth";
import { PYSpinner } from "./PYSpinner";

export const Header = () => {
  const classes = useStyles();
  const [userLogged, setUserLogger] = useState(isUserLogged());
  const { enqueueSnackbar } = useSnackbar();
  const [showInitialNotification, setShowInitialNotification] = useState(true);
  const { data, isLoading } = useFetchPedidosYaApiTest(
    {
      pathApi: "/myAccount"
    },
    []
  );

  const notifyLoggedSuccess = (data: any) => {
    enqueueSnackbar(`Bienvenido a pedidosYa ${name(data)}`, {
      key: "Bienvenido a pedidosYa",
      variant: "success",
      preventDuplicate: true
    });
  };

  const name = (data: any) => {
    if (!data) return "";
    return `${data.name} ${data.lastName}`;
  };

  if (!userLogged) {
    return <Redirect to={"/"} />;
  }

  if (isLoading) return <PYSpinner />;

  if (userLogged && data && showInitialNotification) {
    notifyLoggedSuccess(data);
    setShowInitialNotification(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {name(data)}
          </Typography>
          {data && data.adminId && (
            <Button color="inherit" onClick={() => {}}>
              Administrador
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => {
              logOut();
              setUserLogger(false);
            }}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);
