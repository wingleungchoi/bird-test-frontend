import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_DEMOGRAPHIC_OPTIONS,
  GET_DEMOGRAPHIC_OPTIONS_SUCCESS,
  GET_DEMOGRAPHIC_OPTIONS_FAIL,
  GROUP_BY_DEMOGRAPHIC_OPTION,
  GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS,
  GROUP_BY_DEMOGRAPHIC_OPTION_FAIL
} from 'reduxStore/census/types';
import { BACKEND_DOMAIN } from 'enum/index';

// function that makes the api request and returns a Promise for response
function fetchDemographicColumns() {
  return axios({
    method: 'get',
    url: `${BACKEND_DOMAIN}/api/v1/census/demographicColumns`,
  });
}

// function that makes the api request and returns a Promise for response
function groupBy(column) {
  return axios({
    method: 'post',
    url: `${BACKEND_DOMAIN}/api/v1/census/groupBy`,
    data: {
      demographicColumn: column,
    },
  });
}

// workerFetchDemographicCoumns: makes the api call when watcher saga sees the action
function* workerFetchDemographicCoumns() {
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

// workerGroupBy: makes the api call when watcher saga sees the action
function* workerGroupBy({ payload, }) {
  const { selectedColumn, } = payload;
  try {
    const response = yield call(groupBy.bind(null, selectedColumn));
    const statistics = response.data.data;

    // dispatch a success action to the store with the result
    yield put({ type: GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS, payload: { statistics, }, });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GROUP_BY_DEMOGRAPHIC_OPTION_FAIL, error, });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield all([
    takeLatest(GET_DEMOGRAPHIC_OPTIONS, workerFetchDemographicCoumns),
    takeLatest(GROUP_BY_DEMOGRAPHIC_OPTION, workerGroupBy)
  ]);
}

export {
  watcherSaga
};

export default watcherSaga;
