import { Restaurant, RestaurantFactory } from "../typings";
const factoryRestaurant = (data: RestaurantFactory): Restaurant => {
  return {
    ...data,
    link: "http://www.pedidosya.com.uy/restaurantes/montevideo/<link>-menu"
  };
};
