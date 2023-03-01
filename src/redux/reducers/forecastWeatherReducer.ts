import {
  ForecastAction,
  ForecastActionTypes,
  ForecastWeatherState,
} from '../types/forecastWeatherTypes';

const initialState: ForecastWeatherState = {
  res: null,
  loading: false,
};

export const forecastWeatherReducer = (
  state = initialState,
  action: ForecastAction,
): ForecastWeatherState => {
  switch (action.type) {
    case ForecastActionTypes.FORECAST__LOADING: {
      return {...state, loading: action.payload};
    }
    case ForecastActionTypes.GET__WEATHER__FORECAST__API__SUCCESS: {
      return {...state, res: action.payload};
    }
    default:
      return state;
  }
};
