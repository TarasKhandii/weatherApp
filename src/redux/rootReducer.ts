import {combineReducers} from 'redux';
import {currentWeatherReducer} from './reducers/currentWeatherReducer';
import {forecastWeatherReducer} from './reducers/forecastWeatherReducer';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecastWeather: forecastWeatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
