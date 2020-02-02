export type Pair = {
  start: number;
  end: number;
};

export const isContainer = (pair: Pair, obj: number) => {
  if (pair.end === 10 && obj === 7) return false;
  if (pair.start === 7 && pair.end === 7 && obj === 7) return true;
  return pair.start <= obj && obj < pair.end;
};

export const phValueToLabel = (objParam?: Pair) => {
  if (!objParam) return;
  const obj = (objParam.end - objParam.start) / 2;
  if (0 <= obj && obj < 1) return "Muy ácido";
  if (1 <= obj && obj < 4) return "Moderadamente ácido";
  if (4 <= obj && obj < 7) return "Ligeramente ácido";
  if (7 === obj) return "Neutro";
  if (7 < obj && obj < 10) return "Ligeramente alcalino";
  if (10 <= obj && obj < 12) return "Moderadamente alcalino";
  if (12 <= obj && obj <= 14) return "Muy alcalino";
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
