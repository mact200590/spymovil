import React from "react";
import { useSelector } from "react-redux";
import { useFetchSPYData } from "../hooks/fetch";
import {
  dataApiError,
  dataApiLoading,
  getDataOrderSelector
} from "../redux/selectors";
import SYPCardList from "../components/SPYCardList";

const SPYCardListContainer = () => {
  useFetchSPYData();
  const dataMemo = useSelector(getDataOrderSelector);
  const loading = useSelector(dataApiLoading);
  const error = useSelector(dataApiError);
  return (
    <SYPCardList listCardApi={dataMemo} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
