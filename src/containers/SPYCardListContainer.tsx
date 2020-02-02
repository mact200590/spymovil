import React from "react";
import { useSelector } from "react-redux";
import { useFetchSPYData } from "../hooks/fetch";
import {
  dataApiError,
  dataApiLoading,
  getDataFilteredSelector
} from "../redux/selectors";
import SYPCardList from "../components/SPYCardList";

const SPYCardListContainer = () => {
  useFetchSPYData();
  const dataMemo = useSelector(getDataFilteredSelector);
  const loading = useSelector(dataApiLoading);
  const error = useSelector(dataApiError);

  return (
    <SYPCardList listCardApi={dataMemo} isLoading={loading} error={error} />
  );
};

export default SPYCardListContainer;
