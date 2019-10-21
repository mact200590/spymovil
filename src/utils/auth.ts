import { Auth } from "../types";

export const getAuth = (): Auth | undefined => {
  const session = localStorage.getItem("pedidosYatest.session") || undefined;
  return session ? JSON.parse(session) : undefined;
};

export const saveValidAuth = (data: any) => {
  if (!data || !data.access_token || !data.tokenType) return;
  localStorage.setItem("pedidosYatest.session", JSON.stringify(data));
};

export const getHeaders = () => {
  const auth = getAuth();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  auth !== undefined &&
    auth.access_token &&
    headers.append("Authorization", auth.access_token);
  return headers;
};

export const logOut = () => {
  localStorage.clear();
};

export const isUserLogged = () => {
  const auth = getAuth();
  return auth !== undefined && auth.tokenType === "user";
};

export const isAppRegistered = () => {
  const auth = getAuth();
  return auth !== undefined && auth.tokenType === "app";
};
