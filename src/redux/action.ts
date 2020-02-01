import { DataApi } from "../components/SPYCard";
import { CHANGES_FILTER, CLEAR_FILTER, FETCH_DATA } from "../utils/constant";

export interface State {
  dataApi: DataApiState;
  filer: FilterState;
}

export interface DataApiState {
  dataApi: DataApi[];
  loading: boolean;
  error?: string;
}

export interface FilterState {
  name: string;
}

interface FetchDataAction {
  type: typeof FETCH_DATA;
  dataApi: DataApi[];
  loading: boolean;
}

interface ChangesFilterAction {
  type: typeof CHANGES_FILTER;
  name: string;
}

interface ClearFilterAction {
  type: typeof CLEAR_FILTER;
}

export type ActionTypes =
  | FetchDataAction
  | ChangesFilterAction
  | ClearFilterAction;