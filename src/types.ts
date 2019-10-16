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
  readonly lat: string;
  readonly lng: string;
}

export type FieldFormik = [{
  value: any;
  name: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
}, {
  value: any;
  error?: string | undefined;
  touch: boolean;
  initialValue?: any;
}]

export type PathApi = "/token" ;