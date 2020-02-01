import { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
import { INCORRECT_PASSWORD, INCORRECT_TOKEN } from "../utils/constant";
import { clear, set, get } from "local-storage";
import { useHistory } from "react-router-dom";

export type LoginParams = {
  user: string;
  password: string;
};

export function useFetchSPYAuth() {
  const [error, setError] = useState();
  const [request, response] = useFetch(`${process.env.REACT_APP_API}`);
  const { push } = useHistory();

  const auth = useCallback(
    ({ user, password }: LoginParams) => {
      request.post("auth/token/", {
        username: user,
        password: password
      });
    },
    [request]
  );

  useEffect(() => {
    if (response.status === 401) {
      setError(INCORRECT_PASSWORD);
      clear();
    } else {
      setError(undefined);
    }
  }, [request, setError]);

  useEffect(() => {
    const { data } = request;
    if (data && data.access) {
      safeAuth(data);
      push("/data-online");
    }
  }, [request]);

  const { loading, data } = request;
  return { loading, error, data, auth, setError };
}

export function useFetchSPYRefresh() {
  const [error, setError] = useState();
  const { push } = useHistory();
  const [request, response] = useFetch(`${process.env.REACT_APP_API}`);

  const refresh = useCallback(
    () => {
      request.post("auth/token/refresh/", {
          refresh: `${getAuth().refresh}`,
      });
    },
    [request.post]
  );

  useEffect(() => {
    if (response.status === 401) {
      setError(INCORRECT_TOKEN);
      push("/");
    } else {
      setError(undefined);
    }
  }, [response.status, setError]);

  useEffect(() => {
    const { data } = request;
    if (data && data.access) {
      safeAuth(data);
    }
  }, [request.data]);

  const { loading, data } = request;
  return { loading, error, data, refresh, response, setError };
}

export function safeAuth(data: { access: string; refresh: string }) {
  set("access", data.access);
  data.refresh && set("refresh", data.refresh);
}

export function getAuth() {
  return { access: get("access"), refresh: get("refresh") };
}
