import useFetch from "use-http";
import { getAuth } from "./auth";


export function useFetchSPYData() {
  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_API}data/online/`,
    {
      headers: {
        Authorization: `Bearer ${getAuth().access}`,
        "Content-Type": "application/json"
      }
    },
    []
  );
  return { loading, error, data };
}
