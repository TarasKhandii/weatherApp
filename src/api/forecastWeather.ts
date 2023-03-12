/* ---------------------------------- Axios --------------------------------- */
import axios from './axios';
/* ---------------------------------- Redux --------------------------------- */
import {ForecastWeatherData} from '../redux/types/forecastWeatherTypes';
/* ----------------------------------- Env ---------------------------------- */
import {API_KEY} from '@env';

export const getForecastWeather = (q: string, days: string) => {
  return axios<ForecastWeatherData>({
    method: 'GET',
    url: '/forecast.json',
    params: {q, days},
    headers: {
      key: API_KEY,
    },
  });
};
