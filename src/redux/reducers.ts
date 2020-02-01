import { CHANGES_FILTER, CLEAR_FILTER, FETCH_DATA } from "../utils/constant";
import { ActionTypes, DataApiState, FilterState } from "./action";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  dataApi: reducerDataApi,
  filter: reducerFilter
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
      return { ...state, filter: {} };
    default:
      return state;
  }
}
