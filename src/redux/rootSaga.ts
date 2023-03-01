/* -------------------------------- Libraries ------------------------------- */
import {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
/* ----------------------------------- API ---------------------------------- */
import {getCurrentWeather} from '../api/currentWeather';
import {getForecastWeather} from '../api/forecastWeather';
/* --------------------------------- Redux; --------------------------------- */
import {
  fetchCurrentRequestSuccess,
  forecastLoading,
  loadingWeather,
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
    yield put(loadingWeather(true));
    const res: AxiosResponse<CurrentWeatherData> = yield call(
      getCurrentWeather,
      action.payload.q,
      action.payload.dt,
    );
    yield put(fetchCurrentRequestSuccess(res.data));
    yield put(loadingWeather(false));
  } catch (error) {
    console.log('====>', error);
    yield put(loadingWeather(false));
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
    yield put({
      type: ForecastActionTypes.GET__WEATHER__FORECAST__API__SUCCESS,
      payload: res.data,
    });
    yield put(forecastLoading(false));
  } catch (error) {
    yield put(forecastLoading(false));
    Alert.alert('Something went wrong');
  }
}

export function* rootSaga() {
  yield all([fork(currentWeatherWatcher), fork(forecastWeatherWatcher)]);
}
