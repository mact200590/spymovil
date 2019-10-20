export const getPoint = (text: string) => {
  const arr = text.split(",");
  if (arr.length === 2) {
    return {
      lat: arr[0],
      lng: arr[1]
    };
  }
  return;
};
