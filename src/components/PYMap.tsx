import { GoogleMap, useLoadScript, Data } from "@react-google-maps/api";
import React from "react";
import { PYSpinner } from "./PYSpinner";
import { makeStyles } from "@material-ui/core";
import { usePosition } from "../utils/hooks";
import { Coordinates } from "../typings";

const options = {
  zoomControlOptions: {
    // position: google.maps.ControlPosition.RIGHT_CENTER // ,
    // ...otherOptopns
    zoom: 5
  }
};
type Props = {
  lat: number;
  lng: number;
  onChangeCoordinate: (coordinate: Coordinates) => void;
};

export const PYMap: React.FC<Props> = ({ lat, lng, onChangeCoordinate }) => {
  const classes = useStyles();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD4IQYqIHW-pq_Ez48TJwghVLxlevdPPhg"
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
    featureFactory: (geometry: any) => {
    }
  };
  return (
    <GoogleMap
      mapContainerClassName={classes.root}
      mapContainerStyle={{ minHeight: 500, minWidth: 500 }}
      zoom={5}
      center={center}
      options={options}
      onLoad={onLoad}
      onClick={({ pa: { x, y } }: { pa: { x: number; y: number } }) => {
        onChangeCoordinate({
          lat: x,
          lng: y
        });
      }}
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
