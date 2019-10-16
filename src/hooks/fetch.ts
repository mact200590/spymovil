import { useMemo, useState } from "react";
import useFetch from "react-fetch-hook";
import { Params, PathApi, UNDEFINE_PARAMS_MESSAGE_ERROR } from "../types";
import { getHeaders, saveAuth } from "../utils/auth";
import { API_URL } from "../utils/constants";

export const useFetchPedidosYaApiTest = ({
  pathApi,
  params
}: {
  pathApi: PathApi;
  params?: Params;
}) => {
  const { url, error: errorParams } = useGenerateApiUrl({ pathApi, params });
  const { isLoading, data, error } = useFetch(url, { headers: getHeaders() });
  if (
    !isLoading &&
    !error &&
    !errorParams &&
    pathApi.match("/tokens") &&
    data
  ) {
    saveAuth(data);
  }
  return { isLoading, data, error, errorParams };
};

const useGenerateApiUrl = ({
  pathApi,
  params
}: {
  pathApi: PathApi;
  params?: Params;
}) => {
  const [error, setError] = useState("");
  const url = useMemo(() => {
    let url = `${API_URL}${pathApi}`;
    if (!params) return url;
    const keys = Object.keys(params);
    url = keys.length > 0 ? url.concat("?") : url;
    return keys.reduce((pre, curr, currIndex) => {
      if (!(params as any)[curr]) setError(UNDEFINE_PARAMS_MESSAGE_ERROR);
      const newCurr = `${pre}${curr}=${(params as any)[curr]}`;
      const separator = keys.length - 1 !== currIndex ? "&" : "";
      return `${newCurr}${separator}`;
    }, url);
  }, [pathApi, params]);
  return { url, error };
};
