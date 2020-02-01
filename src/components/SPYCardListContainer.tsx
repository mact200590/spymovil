import React, { useMemo } from "react";
import { useFetchSPYData } from "../hooks/fetch";
import SYPCardList from "./SPYCardList";

const SPYCardListContainer = () => {
  const { loading, error, data = [] } = useFetchSPYData();
  const dataMemo = useMemo(() => {
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
    return dataPrepared;
  }, [data]);
  return (
    <SYPCardList listCardApi={dataMemo} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
