import Big from "big.js";
const numberReg =
  "^[+-]?([1-9][0-9]*(?:[.][0-9]*)?|0*.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$";

export const idLngValid = (lng: string) => {
  try {
    const lngB = new Big(lng);
    return (
      lng.toString().match(numberReg) !== null &&
      lngB.gt("-180") &&
      lngB.lt("180")
    );
  } catch (error) {
    return false;
  }
};

export const idLatValid = (lat: string) => {
  try {
    const latB = new Big(lat);
    return (
      lat.toString().match(numberReg) !== null &&
      latB.gt("-90") &&
      latB.lt("90")
    );
  } catch (error) {
    return false;
  }
};
