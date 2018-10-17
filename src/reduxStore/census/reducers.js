import { combineReducers } from 'redux';
import { SEARCH_CENSUS, SEARCH_CENSUS_SUCCESS, SEARCH_CENSUS_FAIL } from './types';

export const censusReducer = combineReducers({
  isFetching: (state = false, action) => {
    switch (action.type) {
      case SEARCH_CENSUS:
        return true;
      case SEARCH_CENSUS_SUCCESS:
        return false;
      case SEARCH_CENSUS_FAIL:
        return false;
      default: return state;
    }
  },
  peoples: (state = [], action) => {
    switch (action.type) {
      case SEARCH_CENSUS_SUCCESS:
        return action.payload.peoples;
      case SEARCH_CENSUS_FAIL:
        return [];
      default: return state;
    }
  },
});

export default {
  censusReducer,
};
