import { CHANGES_FILTER, CLEAR_FILTER, FETCH_DATA, ORDER_BY } from "../utils/constant";
import { ActionTypes, DataApiState, FilterState, OrderState } from "./action";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  dataApi: reducerDataApi,
  filter: reducerFilter,
  order: reducerOrder,
});

function reducerDataApi(
  state: DataApiState = { dataApi: [], loading: false },
  action: ActionTypes
) {
  switch (action.type) {
    case FETCH_DATA:
      const { dataApi = [], loading } = action;
      return { ...state, dataApi, loading };
    default:
      return state;
  }
}

function reducerFilter(state: FilterState = {}, action: ActionTypes) {
  switch (action.type) {
    case CHANGES_FILTER:
      return { ...state, ...action };
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
}

function reducerOrder(state: OrderState = {}, action: ActionTypes) {
  switch (action.type) {
    case ORDER_BY:
      return { ...state, ...action };
    default:
      return state;
  }
}