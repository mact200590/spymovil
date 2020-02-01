import React, { useMemo } from "react";
import { useFetchSPYData } from "../hooks/fetch";
import SYPCardList from "./SPYCardList";
import { getFilterData, dataApiLoading, dataApiError } from "../redux/selectors";
import { useSelector } from "react-redux";

const SPYCardListContainer = () => {
  useFetchSPYData();
  const dataMemo = useSelector(getFilterData);
  const loading = useSelector(dataApiLoading);
  const error = useSelector(dataApiError);
  
  return (
    <SYPCardList listCardApi={dataMemo} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
