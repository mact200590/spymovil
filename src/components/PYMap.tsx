import { makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript
} from "@react-google-maps/api";
import React, { useState } from "react";
import { Restaurant } from "../types";
import { getPoint } from "../utils/helper";
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
  dataMarkers: Restaurant[];
};

export const PYMap: React.FC<Props> = ({ lat, lng, onClick, dataMarkers }) => {
  const classes = useStyles();
  const [selectedMarker, setSelectedMarker] = useState<Restaurant | undefined>(
    undefined
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY
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
    lat: parseFloat(lat),
    lng: parseFloat(lng)
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
      {dataMarkers &&
        dataMarkers.map(marker => {
          const latLng = getPoint(marker.coordinates);
          if (!latLng) return null;
          return (
            <Marker
              key={marker.id}
              onClick={e => {
                setSelectedMarker(marker);
              }}
              position={{
                lat: parseFloat(latLng.lat),
                lng: parseFloat(latLng.lng)
              }}
            >
              {selectedMarker && selectedMarker.id === marker.id && (
                <InfoWindow
                  position={{
                    lat: parseFloat(latLng.lat),
                    lng: parseFloat(latLng.lng)
                  }}
                  onCloseClick={() => {
                    setSelectedMarker(undefined);
                  }}
                >
                  <div>
                    <Typography gutterBottom variant="subtitle1">
                      {marker.name}
                    </Typography>
                    <Rating
                      name="half-rating"
                      value={marker.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </InfoWindow>
              )}
              }
            </Marker>
          );
        })}
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
