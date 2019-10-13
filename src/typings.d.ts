export type Restaurant = {
  name: string;
  topCategories: string[];
  rating: number;
  pathLogo: string;
  deliveryTimeMaxMinutes: number;
  link: string;
}

export type RestaurantFactory = Omit<Restaurant, "link">;

export type Coordinates = {
  readonly latitude: number;
  readonly longitude: number;
}