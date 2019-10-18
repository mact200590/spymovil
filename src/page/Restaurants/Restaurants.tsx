import { Grid, makeStyles } from "@material-ui/core";
import React, { useMemo } from "react";
import { PYLayoutVerticalList } from "../../components/layout/PYLayoutVerticalList";
import { PYMap } from "../../components/PYMap";
import { PYRestaurantRow } from "../../components/PYRestaurantRow";
import { usePosition } from "../../hooks/map";
import { Restaurant } from "../../types";
import SearchPanel from "./SearchPanel";
import { Header } from "../../components/Header";
import { Redirect } from "react-router";
import { isUserLogged } from "../../utils/auth";

const Restaurants: React.FC = () => {
  const classes = useStyles();
  const { lat, lng, setPosition, error } = usePosition();
  const restaurantMocks = useMemo(() => {
    const restaurants = [];
    for (let index = 0; index < 10; index++) {
      restaurants.push({ id: index, ...restaurantMock });
    }
    return restaurants;
  }, []);
  const onClickMap = (arg: any) => {
    const { latLng } = arg;
    console.log({ lat: latLng.lat(), lng: latLng.lng() });
    setPosition({ lat: latLng.lat(), lng: latLng.lng() });
  };

  if (!isUserLogged()) {
    return <Redirect to={"/"} />;
  }
  
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} container>
        <Header/>
      </Grid>
      <Grid item xs={3} container>
        <PYLayoutVerticalList>
          {restaurantMocks.map(r => (
            <PYRestaurantRow {...r} />
          ))}
        </PYLayoutVerticalList>
      </Grid>
      <Grid item xs={9} container>
        <Grid item xs={12} container className={classes.searchPanel}>
          <SearchPanel latIni={lat} lngIni={lng} />
        </Grid>
        <Grid item xs={12} container>
          <PYMap lat={lat} lng={lng} onClick={onClickMap} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  searchPanel: {
    minHeight: 90
  }
}));

export default Restaurants;

const restaurantMock: Restaurant = {
  name: "Va como pina",
  deliveryTimeMaxMinutes: 60,
  link: "http://www.pedidosya.com.uy/restaurantes/montevideo/<link>-menu",
  pathLogo: "pathlog",
  rating: 3.4,
  topCategories: ["jama", "baile", "cosa gorda"]
};
