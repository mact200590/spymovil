import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Redirect } from "react-router";
import useDimensions from "react-use-dimensions";
import { Header } from "../../components/Header";
import { PYLayoutVerticalList } from "../../components/layout/PYLayoutVerticalList";
import { PYMap } from "../../components/PYMap";
import { PYRestaurantRow } from "../../components/PYRestaurantRow";
import { useFetchPedidosYaApiTest } from "../../hooks/fetch";
import { usePosition } from "../../hooks/map";
import { Restaurant } from "../../types";
import { isUserLogged, logOut } from "../../utils/auth";
import { INVALID_TOKEN } from "../../utils/constants";
import SearchPanel from "./SearchPanel";
import { PYSpinner } from "../../components/PYSpinner";

const Restaurants: React.FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar: notify } = useSnackbar();
  const [userLogged, setUserLogger] = useState(isUserLogged());
  const { lat, lng, setPosition, error } = usePosition();
  const [ref, { x, y, width, height }] = useDimensions();
  const {
    data,
    error: errorRestaurants,
    isLoading,
    clearError: clearRestaurantsErrors
  } = useFetchPedidosYaApiTest(
    {
      pathApi: "/search/restaurants",
      params: {
        lat,
        lng,
        country: "1"
      }
    },
    [lat, lng]
  );
  
  const notifyFetchRestaurantError = (error: any) => {
    notify(
      "Se ha producido un error consultando los restaurantes, póngase en contacto con el proveedor del servicio",
      { key: error.code, variant: "error", preventDuplicate: true }
    );
    clearRestaurantsErrors();
  };

  const onClickMap = (arg: any) => {
    const { latLng } = arg;
    console.log({ lat: latLng.lat(), lng: latLng.lng() });
    setPosition({ lat: latLng.lat(), lng: latLng.lng() });
  };

  const onSearch = (lat: string, lng: string) => {
    setPosition({ lat, lng });
  };

  if (!userLogged) {
    return <Redirect to={"/"} />;
  }

  if (errorRestaurants) {
    if (errorRestaurants.code === INVALID_TOKEN) {
      logOut();
      setUserLogger(false);
    } else {
      notifyFetchRestaurantError(errorRestaurants);
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} container>
        <Header />
      </Grid>
      <Grid item xs={3} container>
        <PYLayoutVerticalList height={height}>
          {isLoading && <PYSpinner />}
          {!isLoading &&
            data !== undefined && data.length > 0 &&
            data.map((r: any) => <PYRestaurantRow {...r} />)}
          {!isLoading && (data === undefined || data.length === 0) && (
            <Typography variant="h4" gutterBottom>
              No hay datos para mostrar
            </Typography>
          )}
        </PYLayoutVerticalList>
      </Grid>
      <Grid ref={ref} item xs={9} container>
        <Grid container className={classes.searchPanel}>
          <SearchPanel latIni={lat} lngIni={lng} onSearch={onSearch}/>
        </Grid>
        <Grid item xs={12} container>
          <PYMap lat={lat} lng={lng} onClick={onClickMap} dataMarkers={data}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  searchPanel: {
    minHeight: 70
  }
}));

export default Restaurants;