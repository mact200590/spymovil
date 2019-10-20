import { useEffect, useMemo, useState } from "react";
import { Params, PathApi, UNDEFINED_PARAMS_MESSAGE_ERROR } from "../types";
import { getHeaders } from "../utils/auth";
import { API_URL } from "../utils/constants";

export const useFetchPedidosYaApiTest = (
  {
    pathApi,
    params
  }: {
    pathApi: PathApi;
    params?: Params;
  },
  depends: any[]
) => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useErrorToShow(undefined);
  const { url, error: errorParams } = useGenerateApiUrl({ pathApi, params });
  useEffect(() => {
    setIsLoading(true);
    fetch(url, { headers: getHeaders() })
      .then(j => j.json())
      .then(data => {
        setIsLoading(false);
        if (data.code) {
          setError(data);
        } else {
          setData(data);
        }
        console.log(`Fetch url: ${url} `, { data });
      })
      .catch(error => {
        error && console.log(`Fetch url: ${url}`, { error });
        setError(error);
        setIsLoading(false);
      });
  }, depends);
  return {
    data,
    isLoading,
    error,
    clearError: () => setError(undefined),
    errorParams
  };
};

const useErrorToShow = (e: any) => {
  const [error, setError] = useState(e);
  useEffect(() => {
    if (error === undefined) {
      setError(error);
      return;
    }
    const { messages, message } = error as any;
    const errorString =
      messages && messages.join
        ? messages.join(", ")
        : message
        ? message
        : "Se a producido un error, póngase en contacto con el proveedor del servicio";
    setError(errorString);
  }, [error, setError]);
  return [error, setError];
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
    if (keys.length > 0) {
      url = url.concat("?");
    } else {
      return url;
    }
    return keys.reduce((pre, curr, currIndex) => {
      if (!(params as any)[curr]) setError(UNDEFINED_PARAMS_MESSAGE_ERROR);
      const newCurr = `${pre}${curr}=${(params as any)[curr]}`;
      const separator = keys.length - 1 !== currIndex ? "&" : "";
      return `${newCurr}${separator}`;
    }, url);
  }, [pathApi, params]);
  return { url, error };
};

export const useFetchPedidosYaApiTestLazy = () => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useErrorToShow(undefined);
  const [{ params, pathApi, count }, setArgs] = useState<{
    pathApi: PathApi;
    params?: Params;
    count: number;
  }>({ pathApi: "/tokens/app", count: 0 });
  const { url, error: errorParams } = useGenerateApiUrl({ pathApi, params });
  useEffect(() => {
    if (count === 0) return;
    setIsLoading(true);
    fetch(url, { headers: getHeaders() })
      .then(j => j.json())
      .then(data => {
        setIsLoading(false);
        if (data.code) {
          setError(data);
        } else {
          setData(data);
        }
        console.log(`FetchLazy url: ${url} `, { data });
      })
      .catch(error => {
        error && console.log(`FetchLazy url: ${url}`, { error });
        setError(error);
        setIsLoading(false);
      });
  }, [params, pathApi, count]);
  const trigger = ({
    pathApi,
    params
  }: {
    pathApi: PathApi;
    params?: Params;
  }) => {
    setArgs({ pathApi, params, count: count + 1 });
  };
  return {
    trigger,
    data,
    isLoading,
    error,
    errorParams,
    clearError: () => setError(undefined)
  };
};
