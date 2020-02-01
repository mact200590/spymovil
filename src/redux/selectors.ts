import moment from "moment";
import { createSelector } from "reselect";
import { isContainer } from "../utils/helper";
import { State } from "./action";

const dataApi = (state: State) => state.dataApi.dataApi;
export const dataApiLoading = (state: State) => state.dataApi.loading;
export const dataApiError = (state: State) => state.dataApi.error;
const filter = (state: State) => state.filter;

export const getData = createSelector([dataApi], dataApi => {
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
});

export const getDataFilter = createSelector(
  [getData, filter],
  (getData, filter) =>
    getData.filter(data => {
      const keys = Object.keys(filter);

      return !keys.some(key => {
        const valueFilter = (filter as any)[key];
        switch (key) {
          case "typeData":
            return (data as any)["type"].name !== valueFilter;
          case "turbidity":
            return !(
              (valueFilter > 3 && (data as any)[key] > 3) ||
              (valueFilter < 3 && (data as any)[key] < 3)
            );
          case "date":
            const momentDate = moment((data as any)[key]);
            const momentFilter = moment(valueFilter);
            return !momentDate.isSame(momentFilter, "d");
          case "ph":
            return !isContainer(valueFilter, (data as any)[key]);
          default:
            if ((data as any)[key] !== valueFilter) {
              return true;
            }
            return false;
        }
      });
    })
);
