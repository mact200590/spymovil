export type Restaurant = {
  name: string;
  topCategories: string[];
  rating: number;
  pathLogo: string;
  deliveryTimeMaxMinutes: number;
  link: string;
};

export type RestaurantFactory = Omit<Restaurant, "link">;

export type Coordinates = {
  readonly lat: string;
  readonly lng: string;
};

export type FieldFormik = [
  {
    value: any;
    name: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
  },
  {
    value: any;
    error?: string | undefined;
    touch: boolean;
    initialValue?: any;
  }
];

export type PathApi =
  | "/tokens/app"
  | "/tokens/user"
  | "/myAccount"
  | "/search/restaurants";

export type Params = {
  //app
  clientId?: string;
  clientSecret?: string;

  //user
  userName?: string;
  password?: string;

  //restaurant
  country?: string;
  point?: string;
  max?: string;
  offset?: string;
  fields?: string;
};

export type TokenType = "app" | "user";
export type Auth = { access_token: string, tokenType: string };


export const UNDEFINED_PARAMS_MESSAGE_ERROR = "Faltan parámetros en su petición";
