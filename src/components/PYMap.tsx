import { makeStyles } from "@material-ui/core";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";
import { PYSpinner } from "./PYSpinner";

const options = {
  zoomControlOptions: {
    // position: google.maps.ControlPosition.RIGHT_CENTER // ,
    // ...otherOptopns
    zoom: 5
  }
};
type Props = {
  lat: string;
  lng: string;
  onClick: (args: any) => void | undefined;
};

export const PYMap: React.FC<Props> = ({ lat, lng, onClick }) => {
  const classes = useStyles();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyABi3f5wNa83dWgg35I9rx6UbPIFol2TW0" //adria apikey
    // ...otherOptions
  });
  const onLoad = React.useCallback(mapInstance => {
    // do something with map Instance
  }, []);

  if (!isLoaded) return <PYSpinner />;

  if (loadError) {
    return (
      <div>El Mapa no puede ser cargado en estos momentos, lo sentimos.</div>
    );
  }
  const center = {
    lat,
    lng
  };

  const dataOptions = {
    controlPosition: "TOP_LEFT",
    controls: ["Point"],
    drawingMode: "Point", //  "LineString" or "Polygon".
    featureFactory: (geometry: any) => {}
  };
  return (
    <GoogleMap
      mapContainerClassName={classes.root}
      mapContainerStyle={{ minHeight: 500, minWidth: 500 }}
      zoom={15}
      center={center}
      options={options}
      onLoad={onLoad}
      onClick={onClick}
    >
      {/* <Data  options={dataOptions} /> */}
      {
        // ...Your map components
      }
    </GoogleMap>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
}));
