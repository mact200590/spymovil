import { isNumber } from "util";

export type Pair = {
  start: number;
  end: number;
};

export const isContainer = (pair: Pair, obj: number) => {
  if (pair.end === 10 && obj === 7) return false;
  if (pair.start === 7 && pair.end === 7 && obj === 7) return true;
  return pair.start <= obj && obj < pair.end;
};

export const phValueToLabel = (objParam?: Pair | number | undefined) => {
  if (!objParam)
    return {
      label: "",
      color: ""
    };

  const obj = isNumber(objParam)
    ? objParam
    : (objParam.end - objParam.start) / 2;
  if (0 <= obj && obj < 1)
    return {
      label: "Muy ácido",
      color: "#E3272A"
    };
  if (1 <= obj && obj < 4)
    return { label: "Moderadamente ácido", color: "#F07129" };
  if (4 <= obj && obj < 7)
    return { label: "Ligeramente ácido", color: "#B8C431" };
  if (7 === obj) return { label: "Neutro", color: "#149845" };
  if (7 < obj && obj < 10)
    return { label: "Ligeramente alcalino", color: "#0F7A9D" };
  if (10 <= obj && obj < 12)
    return { label: "Moderadamente alcalino", color: "#3A4595" };
  if (12 <= obj && obj <= 14)
    return { label: "Muy alcalino", color: "#5B2570" };
  return {
    label: "",
    color: ""
  };
};

export const phValueToPair = (obj?: string) => {
  switch (obj) {
    case "Muy ácido":
      return {
        start: 0,
        end: 1
      };
    case "Moderadamente ácido":
      return {
        start: 1,
        end: 4
      };
    case "Ligeramente ácido":
      return {
        start: 4,
        end: 7
      };
    case "Neutro":
      return {
        start: 7,
        end: 7
      };
    case "Ligeramente alcalino":
      return {
        start: 7,
        end: 10
      };
    case "Moderadamente alcalino":
      return {
        start: 10,
        end: 12
      };
    case "Muy alcalino":
      return {
        start: 12,
        end: 14
      };
    default:
      return {
        start: 0,
        end: 14
      };
  }
};
