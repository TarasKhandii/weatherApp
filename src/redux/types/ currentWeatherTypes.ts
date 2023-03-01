export interface CurrentWeatherState {
  response: CurrentWeatherData | null;
  loading: boolean;
}

export enum CurrentWeatherActionTypes {
  CURRENT__LOADING__WEATHER = 'CURRENT__LOADING__WEATHER',
  GET__WEATHER__CURRENT__API = 'GET__WEATHER__CURRENT__API',
  GET__WEATHER__CURRENT__API__SUCCESS = 'GET__WEATHER__CURRENT__API__SUCCESS',
}

export interface CurrentWeatherLoadingAction {
  type: CurrentWeatherActionTypes.CURRENT__LOADING__WEATHER;
  payload: boolean;
}
export interface CurrentWeatherApiAction {
  type: CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API;
  payload: {q: string; dt: string};
}
export interface CurrentWeatherApiSuccessAction {
  type: CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API__SUCCESS;
  payload: CurrentWeatherData;
}

export type CurrentWeatherAction =
  | CurrentWeatherLoadingAction
  | CurrentWeatherApiAction
  | CurrentWeatherApiSuccessAction;

export interface CurrentWeatherData {
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
  forecast: {
    forecastday: Array<{
      astro: {};
      date: string;
      date_epoch: number;
      day: {
        avghumidity: number;
        avgtemp_c: number;
        avgtemp_f: number;
        avgvis_km: number;
        avgvis_miles: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        maxtemp_c: number;
        maxtemp_f: number;
        maxwind_kph: number;
        maxwind_mph: number;
        mintemp_c: number;
        mintemp_f: number;
        totalprecip_in: number;
        totalprecip_mm: number;
        uv: number;
      };
      hour: Array<{
        feelslike_c: number;
        pressure_mb: number;
      }>;
    }>;
  };
}
