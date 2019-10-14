import { Grid, makeStyles, FormHelperText } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect, useState, useCallback } from "react";
import { PYButton } from "../../components/PYButton";
import { PYInput } from "../../components/PYInput";
import { idLatValid, idLngValid } from "../../utils/coordinate";
import { Coordinates } from "../../typings";

type Props = {
  latIni: number;
  lngIni: number;
};

const SearchPanel: React.FC<Props> = ({latIni, lngIni}) => {
  const classes = useStyles();
  const [config, setConfig] = useState<any>({
    enableReinitialize: true,
    initialValues: {
      lat: latIni,
      lng: lngIni
    },
    validate: (values: Coordinates) => {
      const err: any = {};
      if (!idLatValid(values.lat)) err.lat = "Inválida Latitud";
      if (!idLngValid(values.lng)) err.lng = "Inválida Longitud";
      return err;
    },
    onSubmit: (values: Coordinates, bag: any) => {
    },
  });
  const { getFieldProps, handleSubmit, errors, touched, resetForm,  } = useFormik(config);
  useEffect(()=>{
  },[latIni, lngIni])
  const [lat, metadataLat] = getFieldProps("lat", "number");
  const [lng, metadataLng] = getFieldProps("lng", "number");
  useEffect(()=>{
  },[latIni, lngIni])
  return (
    <form onSubmit={handleSubmit} style={{marginTop: latIni > lngIni ? 1 : 2}}>
      <Grid
        className={classes.form}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <PYInput
          typeVariant="primary"
          margin="normal"
          required
          fullWidth
          id="latitud"
          label="Latitud"
          autoComplete="latitud"
          autoFocus
          {...lat}
          error={
            metadataLat.touch && metadataLat.error
              ? metadataLat.error
              : undefined
          }
          classNameContainer={classes.spacerItems}
        />
        <PYInput
          typeVariant="primary"
          margin="normal"
          required
          fullWidth
          id="longitud"
          label="Longitud"
          autoComplete="Longitud"
          autoFocus
          {...lng}
          error={
            metadataLng.touch && metadataLng.error
              ? metadataLng.error
              : undefined
          }
          classNameContainer={classes.spacerItems}
        />
        <PYButton
          label="Buscar"
          typeVariant="primary"
          fullWidth={false}
          type="submit"
          className={classes.button}
        />
      </Grid>
    </form>
  );
};

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 150
  },
  spacerItems: {
    marginRight: theme.spacing(2)
  },
  form: {
    width: "100%",
    alignItems: "center",
    margin: theme.spacing(2)
  }
}));

export default SearchPanel;
