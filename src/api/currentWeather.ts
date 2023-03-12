/* ---------------------------------- Axios --------------------------------- */
import axios from './axios';
/* ---------------------------------- Redux --------------------------------- */
import {CurrentWeatherData} from '../redux/types/ currentWeatherTypes';
/* ----------------------------------- Env ---------------------------------- */
import {API_KEY} from '@env';

export const getCurrentWeather = (q: string, dt: string) => {
  return axios<CurrentWeatherData>({
    method: 'GET',
    url: '/history.json',
    params: {q, dt, ln: 'en'},
    headers: {
      key: API_KEY,
    },
  });
};
