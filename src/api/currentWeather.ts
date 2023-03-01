/* ---------------------------------- Axios --------------------------------- */
import axios from './axios';
/* ---------------------------------- Redux --------------------------------- */
import {CurrentWeatherData} from '../redux/types/ currentWeatherTypes';

export const getCurrentWeather = (q: string, dt: string) => {
  return axios<CurrentWeatherData>({
    method: 'GET',
    url: '/history.json',
    params: {q, dt, ln: 'en'},
    headers: {
      key: '5d3596858a504550a1c230357232602',
    },
  });
};
