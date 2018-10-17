import { combineReducers } from 'redux';
import { censusReducer } from 'reduxStore/census';

export const rootReducer = combineReducers({
  census: censusReducer,
});

export default rootReducer;
