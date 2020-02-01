import React, { useEffect, useState } from "react";
import { DataApi } from "../components/SPYCard";
import { useFetchSPYData } from "../hooks/fetch";
import SYPCardList from "./SPYCardList";

const SPYCardListContainer = () => {
  const [dataApis, setDataApis] = useState<DataApi[]>([]);
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
    <SYPCardList listCardApi={dataApis} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
