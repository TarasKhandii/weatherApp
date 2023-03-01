export interface ForecastWeatherState {
  res: ForecastWeatherData | null;
  loading: boolean;
}

export enum ForecastActionTypes {
  FORECAST__LOADING = 'FORECAST__LOADING',
  GET__WEATHER__FORECAST__API = 'GET__WEATHER__FORECAST__API',
  GET__WEATHER__FORECAST__API__SUCCESS = 'GET__WEATHER__FORECAST__API__SUCCESS',
}

export interface ForecastLoadingAction {
  type: ForecastActionTypes.FORECAST__LOADING;
  payload: boolean;
}

export interface ForecastApiAction {
  type: ForecastActionTypes.GET__WEATHER__FORECAST__API;
  payload: {q: string; days: string};
}
export interface ForecastApiSuccessAction {
  type: ForecastActionTypes.GET__WEATHER__FORECAST__API__SUCCESS;
  payload: any;
}

export type ForecastAction =
  | ForecastLoadingAction
  | ForecastApiSuccessAction
  | ForecastApiAction;

export interface ForecastWeatherData {
  current: {};
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
      hour: [{}];
    }>;
  };
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
}
