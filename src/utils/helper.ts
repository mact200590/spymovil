export type Pair = {
  start: number;
  end: number;
};

export const isContainer = (pair: Pair, obj: number) => {
  return pair.start <= obj && obj <= pair.end;
};
