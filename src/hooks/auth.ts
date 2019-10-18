import { useEffect, useState } from "react";
import { Auth } from "../types";
import { getAuth, getHeaders } from "../utils/auth";

export const useHeaders = (): any => {
  const [headers, setHeaders] = useState(getHeaders());
  return [headers, setHeaders];
};

export const useAuth = (): any => {
  const [auth, setAuth] = useState(getAuth());
  const saveAuth = (data: any) => {
    if (!data || !data.access_token || !data.tokenType) return;
    localStorage.setItem("pedidosYatest.session", JSON.stringify(data));
    setAuth(data);
  };
  const isUserLogged = auth !== undefined && auth.tokenType === "user";
  const isAppRegistered = auth !== undefined && auth.tokenType === "app";
  return [{ ...auth, isUserLogged, isAppRegistered }, saveAuth];
};
