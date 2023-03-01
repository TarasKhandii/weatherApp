import {
  CurrentWeatherAction,
  CurrentWeatherActionTypes,
  CurrentWeatherState,
} from '../types/ currentWeatherTypes';

const initialState: CurrentWeatherState = {
  response: null,
  loading: false,
};

export const currentWeatherReducer = (
  state = initialState,
  action: CurrentWeatherAction,
): CurrentWeatherState => {
  switch (action.type) {
    case CurrentWeatherActionTypes.CURRENT__LOADING__WEATHER: {
      return {...state, loading: action.payload};
    }
    case CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API__SUCCESS: {
      return {...state, response: action.payload};
    }
    default:
      return state;
  }
};
