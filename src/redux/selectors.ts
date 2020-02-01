import { createSelector } from "reselect";
import { State } from "./action";

const dataApi = (state: State) => state.dataApi.dataApi;
export const dataApiLoading = (state: State) => state.dataApi.loading;
export const dataApiError = (state: State) => state.dataApi.error;
const filter = (state: State) => state.filer;

export const getFilterData = createSelector(
  [dataApi, filter],
  (dataApi, filter) => {
    const dataPrepared = dataApi.map((item: any) => ({
      id: item.id,
      name: item.nombre,
      chlorine: item.cloro,
      ph: item.ph,
      turbidity: item.turbidez,
      date: item.fecha,
      type: {
        id: item.tipo.id,
        name: item.tipo.nombre
      }
    }));
    return dataPrepared;
  }
);
