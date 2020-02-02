import moment from "moment";
import { createSelector } from "reselect";
import { isContainer } from "../utils/helper";
import { State } from "./action";
import { DataApi } from "../components/SPYCard";

const dataApi = (state: State) => state.dataApi.dataApi;
export const dataApiLoading = (state: State) => state.dataApi.loading;
export const dataApiError = (state: State) => state.dataApi.error;
export const filterSelector = (state: State) => state.filter;
export const orderSelector = (state: State) => state.order;

export const getDataSelector = createSelector([dataApi], dataApi => {
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

export const getDataFilteredSelector = createSelector(
  [getDataSelector, filterSelector],
  (getData, filter) =>
    getData.filter(data => {
      const keys = Object.keys(filter).filter(
        d =>
          (filter as any)[d] !== undefined &&
          (filter as any)[d] !== "" &&
          d !== "type"
      );
      return !keys.some(key => {
        const valueFilter = (filter as any)[key];
        switch (key) {
          case "type":
            return false;
          case "typeData":
            if (!valueFilter) return false;
            return (data as any)["type"].name !== valueFilter;
          case "turbidity":
            return !(
              (valueFilter > 3 && (data as any)[key] > 3) ||
              (valueFilter <= 3 && (data as any)[key] <= 3)
            );
          case "date":
            const momentDate = moment((data as any)[key]);
            const momentFilter = moment(valueFilter);
            return !momentDate.isSame(momentFilter, "d");
          case "ph":
            return !isContainer(valueFilter, (data as any)[key]);
          default:
            if (!valueFilter) return false;
            if (
              (data as any)[key].toString().toLocaleLowerCase() !==
              valueFilter.toString().toLocaleLowerCase()
            ) {
              return true;
            }
            return false;
        }
      });
    })
);

export const getDataOrderSelector = createSelector(
  [getDataFilteredSelector, orderSelector],
  (getDataFilter, order) => orderBasicValues(getDataFilter, order.value)
);

const orderBasicValues = (data: DataApi[], valueOrder: string | undefined) => {
  let value = valueOrder ? valueOrder : "name";

  return data.sort((a: any, b: any) => {
    return value === "typeData"
      ? a.type.name.toString().localeCompare(b.type.name.toString())
      : a[value].toString().localeCompare(b[value].toString());
  });
};
