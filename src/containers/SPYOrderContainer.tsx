import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SPYOrderBy from "../components/SPYOrderBy";
import { orderSelector } from "../redux/selectors";
import { ORDER_BY } from "../utils/constant";

const SPYOrderContainer = () => {
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);
  const onChange: any = useCallback(
    (value: string) => {
      dispatch({ type: ORDER_BY, value });
    },
    [dispatch]
  );

  return (
    <SPYOrderBy
      typeVariant={"primary"}
      title={"Order"}
      onChange={onChange}
      styleContainer={{ marginTop: "10px", minWidth: "165px" }}
      defaultValue={order.value}
    />
  );
};

export default SPYOrderContainer;
