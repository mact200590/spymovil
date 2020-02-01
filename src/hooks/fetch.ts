import { useEffect, useState } from "react";
import useFetch from "use-http";
import { INCORRECT_TOKEN, FETCH_DATA } from "../utils/constant";
import { getAuth, useFetchSPYRefresh } from "./auth";
import { useDispatch } from "react-redux";

export function useFetchSPYData() {
  const [access, setAccess] = useState(getAuth().access);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const {
    loading: loadingRefresh,
    error: errorRefresh,
    response: responseRefresh,
    refresh
  } = useFetchSPYRefresh();
  const { loading, error: errorApi, data: dataApi, response } = useFetch(
    `${process.env.REACT_APP_API}data/online/`,
    {
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-Type": "application/json"
      }
    },
    [access]
  );

  useEffect(() => {
    if (response.status === 401) {
      refresh();
      setData([]);
    } else {
      setData(dataApi);
    }
  }, [response.status, refresh, setData, dataApi]);

  useEffect(() => {
    if (responseRefresh.status === 200) {
      setAccess(getAuth().access);
    }
    if (responseRefresh.status === 401) {
      setError(INCORRECT_TOKEN);
    }
  }, [responseRefresh.status]);

  useEffect(() => {
    if (errorRefresh || errorApi) {
      setError(INCORRECT_TOKEN);
    }
  }, [errorRefresh, errorApi]);

  useEffect(() => {
    dispatch({
      type: FETCH_DATA,
      loading: loading || loadingRefresh, error, dataApi: data 
    });
  }, [loading, loadingRefresh, error, data]);

  return { loading: loading || loadingRefresh, error, data };
}
