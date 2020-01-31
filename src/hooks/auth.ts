import { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
import { INCORRECT_PASSWORD } from "../utils/constant";
import {clear, set } from 'local-storage';

export type LoginParams = {
  user: string;
  password: string;
};

export function useFetchSPYAuth() {
  const [error, setError] = useState();
  const [request, response] = useFetch(`${process.env.REACT_APP_API}`);

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
    }
  }, [request]);

  const { loading, data } = request;
  return { loading, error, data, auth, setError };
}

function safeAuth(data: { access: string; refresh: string }) {
  set("access", data.access);
  set("refresh", data.refresh);
}