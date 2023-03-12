import {
  CurrentWeatherActionTypes,
  CurrentWeatherApiAction,
  CurrentWeatherApiSuccessAction,
  CurrentWeatherData,
  CurrentWeatherLoadingAction,
} from '../types/ currentWeatherTypes';
import {
  ForecastActionTypes,
  ForecastApiAction,
  ForecastLoadingAction,
} from '../types/forecastWeatherTypes';

/* --------------------------------- Current -------------------------------- */

export const loadingCurrentWeather = (
  payload: boolean,
): CurrentWeatherLoadingAction => ({
  type: CurrentWeatherActionTypes.CURRENT__LOADING__WEATHER,
  payload,
});

export const fetchCurrentWeatherRequest = (payload: {
  q: string;
  dt: string;
}): CurrentWeatherApiAction => {
  return {
    type: CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API,
    payload,
  };
};
export const fetchCurrentWeatherRequestSuccess = (
  payload: CurrentWeatherData,
): CurrentWeatherApiSuccessAction => {
  return {
    type: CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API__SUCCESS,
    payload,
  };
};

/* -------------------------------- FORECAST -------------------------------- */

export const forecastLoading = (payload: boolean): ForecastLoadingAction => ({
  type: ForecastActionTypes.FORECAST__LOADING,
  payload,
});

export const fetchForecastRequest = (payload: {
  q: string;
  days: string;
}): ForecastApiAction => {
  return {
    type: ForecastActionTypes.GET__WEATHER__FORECAST__API,
    payload,
  };
};

export const fetchForecastRequestSuccess = (payload: any) => {
  return {
    type: ForecastActionTypes.GET__WEATHER__FORECAST__API__SUCCESS,
    payload,
  };
};
