import { Auth } from "../types";

export const getAuth = (): Auth | undefined => {
  const session = localStorage.getItem("pedidosYatest.session") || undefined;
  return session ? JSON.parse(session) : undefined;
};

export const getHeaders = () => {
  const auth = getAuth();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  auth !== undefined &&
    (auth as any).access_token &&
    headers.append("Authorization", (auth as any).access_token);
  return headers
};