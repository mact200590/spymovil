import { useEffect, useState } from "react";
import { Auth } from "../types";
import { getAuth, getHeaders } from "../utils/auth";

export const useHeaders = (): any => {
  const [headers, setHeaders] = useState(getHeaders());
  return [headers, setHeaders];
};
