/* ---------------------------------- Axios --------------------------------- */
import axios from './axios';
/* ---------------------------------- Redux --------------------------------- */
import {ForecastWeatherData} from '../redux/types/forecastWeatherTypes';

export const getForecastWeather = (q: string, days: string) => {
  return axios<ForecastWeatherData>({
    method: 'GET',
    url: '/forecast.json',
    params: {q, days},
    headers: {
      key: '5d3596858a504550a1c230357232602',
    },
  });
};
