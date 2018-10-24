import { combineReducers } from 'redux';
import {
  GET_DEMOGRAPHIC_OPTIONS,
  GET_DEMOGRAPHIC_OPTIONS_SUCCESS,
  GET_DEMOGRAPHIC_OPTIONS_FAIL,
  GROUP_BY_DEMOGRAPHIC_OPTION,
  GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS,
  GROUP_BY_DEMOGRAPHIC_OPTION_FAIL
} from 'reduxStore/census/types';

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
        return action.payload.demographicColumns;
      case GET_DEMOGRAPHIC_OPTIONS_FAIL:
        return [];
      default: return state;
    }
  },
  isGrouping: (state = false, action) => {
    switch (action.type) {
      case GROUP_BY_DEMOGRAPHIC_OPTION:
        return true;
      case GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS:
        return false;
      case GROUP_BY_DEMOGRAPHIC_OPTION_FAIL:
        return false;
      default: return state;
    }
  },
  statistics: (state = [], action) => {
    switch (action.type) {
      case GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS:
        return action.payload.statistics;
      case GROUP_BY_DEMOGRAPHIC_OPTION_FAIL:
        return [];
      default: return state;
    }
  },
  selectedColumn: (state = '', action) => {
    switch (action.type) {
      case GROUP_BY_DEMOGRAPHIC_OPTION:
        return action.payload.selectedColumn;
      default: return state;
    }
  },
});

export default {
  censusReducer,
};
