const numberReg = "^[+-]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$";

export const idLngValid = (lng: number) => {
  try {
    return lng.toString().match(numberReg) !== null && -180 < lng && lng < 180;
  } catch (error) {
    return false;
  }
};

export const idLatValid = (lat: number) => {
  try {
    return lat.toString().match(numberReg) !== null && -90 < lat && lat < 90;
  } catch (error) {
    return false;
  }
};
