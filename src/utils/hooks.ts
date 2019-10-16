import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { PathApi, Coordinates } from "../types";

export const useFetchPedidosYaApiTest = ({ pathApi }: { pathApi: PathApi }) => {
  const { isLoading, data } = useFetch(`http://localhost:3000${pathApi}`, {});
  return { isLoading, data };
};

export const usePosition = () => {
  const [position, setPosition] = useState<Coordinates>({
    lat: "-13.9142463",
    lng: "-56.1767327"
  });
  const [error, setError] = useState("");
  useEffect(() => {
    const geo = navigator.geolocation;
    const onSuccess = ({ coords }: any) => {
      setPosition({
        lat: coords.latitude,
        lng: coords.longitude
      });
    };
    const onError = (error: any) => {
      setError(error.message);
    };
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geo.watchPosition(onSuccess, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, setPosition, error };
};
