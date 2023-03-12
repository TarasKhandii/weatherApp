/* -------------------------------- Libraries ------------------------------- */
import {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
/* ----------------------------------- API ---------------------------------- */
import {getCurrentWeather} from '../api/currentWeather';
import {getForecastWeather} from '../api/forecastWeather';
/* --------------------------------- Redux; --------------------------------- */
import {
  fetchCurrentWeatherRequestSuccess,
  fetchForecastRequestSuccess,
  forecastLoading,
  loadingCurrentWeather,
} from './actions/actions';
import {
  CurrentWeatherActionTypes,
  CurrentWeatherApiAction,
  CurrentWeatherData,
} from './types/ currentWeatherTypes';
import {
  ForecastActionTypes,
  ForecastApiAction,
  ForecastWeatherData,
} from './types/forecastWeatherTypes';

/* ----------------------------------- Current ----------------------------------- */
function* currentWeatherWatcher() {
  yield takeEvery(
    CurrentWeatherActionTypes.GET__WEATHER__CURRENT__API,
    currentWeatherWorker,
  );
}

function* currentWeatherWorker(action: CurrentWeatherApiAction): any {
  try {
    yield put(loadingCurrentWeather(true));
    const res: AxiosResponse<CurrentWeatherData> = yield call(
      getCurrentWeather,
      action.payload.q,
      action.payload.dt,
    );
    yield put(fetchCurrentWeatherRequestSuccess(res.data));
    yield put(loadingCurrentWeather(false));
  } catch (error) {
    yield put(loadingCurrentWeather(false));
    Alert.alert('Something went wrong');
  }
}

/* --------------------------------- Forecast --------------------------------- */

function* forecastWeatherWatcher() {
  yield takeEvery(
    ForecastActionTypes.GET__WEATHER__FORECAST__API,
    forecastWeatherWorker,
  );
}

function* forecastWeatherWorker(action: ForecastApiAction): any {
  try {
    yield put(forecastLoading(true));
    const res: AxiosResponse<ForecastWeatherData> = yield call(
      getForecastWeather,
      action.payload.q,
      action.payload.days,
    );
    yield put(fetchForecastRequestSuccess(res.data));
    yield put(forecastLoading(false));
  } catch (error) {
    yield put(forecastLoading(false));
    Alert.alert('Something went wrong');
  }
}

export function* rootSaga() {
  yield all([fork(currentWeatherWatcher), fork(forecastWeatherWatcher)]);
}
