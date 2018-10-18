import { combineReducers } from 'redux';
import { GET_DEMOGRAPHIC_OPTIONS, GET_DEMOGRAPHIC_OPTIONS_SUCCESS, GET_DEMOGRAPHIC_OPTIONS_FAIL } from './types';

export const censusReducer = combineReducers({
  isFetching: (state = false, action) => {
    switch (action.type) {
      case GET_DEMOGRAPHIC_OPTIONS:
        return true;
      case GET_DEMOGRAPHIC_OPTIONS_SUCCESS:
        return false;
      case GET_DEMOGRAPHIC_OPTIONS_FAIL:
        return false;
      default: return state;
    }
  },
  demographicOptions: (state = [], action) => {
    switch (action.type) {
      case GET_DEMOGRAPHIC_OPTIONS_SUCCESS:
        return action.payload.demographicOptions;
      case GET_DEMOGRAPHIC_OPTIONS_FAIL:
        return [];
      default: return state;
    }
  },
});

export default {
  censusReducer,
};
