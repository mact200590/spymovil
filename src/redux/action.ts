import { DataApi } from "../components/SPYCard";
import { CHANGES_FILTER, CLEAR_FILTER, FETCH_DATA } from "../utils/constant";
import { Pair } from "../utils/helper";

export interface State {
  dataApi: DataApiState;
  filter: FilterState;
}

export interface DataApiState {
  dataApi: DataApi[];
  loading: boolean;
  error?: string;
}

export interface FilterState {
  name?: string;
  chlorine?: number;
  ph?: Pair;
  turbidity?: number;
  date?: string;
  typeData?: string;
}

interface FetchDataAction {
  type: typeof FETCH_DATA;
  dataApi: DataApi[];
  loading: boolean;
}

interface ChangesFilterAction {
  type: typeof CHANGES_FILTER;
  name?: string;
  chlorine?: number;
  ph?: Pair;
  turbidity?: number;
  date?: string;
  typeData?: string;
}

interface ClearFilterAction {
  type: typeof CLEAR_FILTER;
}

export type ActionTypes =
  | FetchDataAction
  | ChangesFilterAction
  | ClearFilterAction;