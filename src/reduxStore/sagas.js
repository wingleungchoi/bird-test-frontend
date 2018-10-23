import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { GET_DEMOGRAPHIC_OPTIONS, GET_DEMOGRAPHIC_OPTIONS_SUCCESS, GET_DEMOGRAPHIC_OPTIONS_FAIL } from 'reduxStore/census/types';
import { BACKEND_DOMAIN } from 'enum/index';

// function that makes the api request and returns a Promise for response
function fetchDemographicColumns() {
  return axios({
    method: 'get',
    url: `${BACKEND_DOMAIN}/api/v1/census/demographicColumns`,
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDemographicColumns);
    const demographicColumns = response.data.data;
    const payload = { demographicColumns, };

    // dispatch a success action to the store with the new demographicColumns
    yield put({ type: GET_DEMOGRAPHIC_OPTIONS_SUCCESS, payload, });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_DEMOGRAPHIC_OPTIONS_FAIL, error, });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield takeLatest(GET_DEMOGRAPHIC_OPTIONS, workerSaga);
}

export {
  watcherSaga
};

export default watcherSaga;
