import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SPYFilters from "../components/SPYFilters";
import { FilterState } from "../redux/action";
import { filter as filterSelector } from "../redux/selectors";
import { CHANGES_FILTER, CLEAR_FILTER } from "../utils/constant";

const SPYFilterContainer = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const onClick = useCallback(
    (filter: FilterState) => dispatch({ type: CHANGES_FILTER, ...filter }),
    [dispatch]
  );
  const onClickClear = useCallback(() => dispatch({ type: CLEAR_FILTER }), [
    dispatch
  ]);

  return (
    <SPYFilters filter={filter} onClick={onClick} onClickClear={onClickClear} />
  );
};

export default SPYFilterContainer;
