import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataApi } from "../components/SPYCard";
import SYPCardList from "./SPYCardList";
import { useFetchSPYData } from "../hooks/fetch";

const SPYCardListContainer = () => {
  const [dataApis, setDataApis] = useState<DataApi[]>([]);
  const classes = useStyles();
  const { loading, error, data = [] } = useFetchSPYData();
  useEffect(() => {
    const dataPrepared = data.map((item: any) => ({
      id: item.id,
      name: item.nombre,
      chlorine: item.cloro,
      ph: item.ph,
      turbidity: item.turbidez,
      date: item.fecha,
      type: {
        id: item.tipo.id,
        name: item.tipo.nombre
      }
    }));
    setDataApis(dataPrepared);
  }, [data]);

  return (
    <div className={classes.container}>
      {error && <div>Algo está mal ...</div>}
      <SYPCardList listCardApi={dataApis} isLoading={loading} />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: "550px"
  }
});

export default SPYCardListContainer;
