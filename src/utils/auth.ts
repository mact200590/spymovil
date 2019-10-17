import { Auth } from "../types";

export const getHeaders = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const session = localStorage.getItem("pedidosYatest.session") || undefined;
  const auth: Auth = session
    ? JSON.parse(session)
    : { access_token: undefined };
  auth && headers.append("Authorization", auth.access_token);
  return headers;
};

export const saveAuth = (auth: Auth) => {
  if(!auth || !auth.access_token) return;
  localStorage.setItem("pedidosYatest.session", JSON.stringify(auth));
};
