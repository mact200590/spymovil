import React from "react";
import { useSelector } from "react-redux";
import { useFetchSPYData } from "../hooks/fetch";
import {
  dataApiError,
  dataApiLoading,
  getDataFilter
} from "../redux/selectors";
import SYPCardList from "./SPYCardList";

const SPYCardListContainer = () => {
  useFetchSPYData();
  const dataMemo = useSelector(getDataFilter);
  const loading = useSelector(dataApiLoading);
  const error = useSelector(dataApiError);

  return (
    <SYPCardList listCardApi={dataMemo} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
