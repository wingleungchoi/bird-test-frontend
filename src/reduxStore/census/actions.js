import { SEARCH_CENSUS, SEARCH_CENSUS_SUCCESS, SEARCH_CENSUS_FAIL } from 'reduxStore/census/types';

export const searchCensusSuccess = census => ({
  type: SEARCH_CENSUS_SUCCESS,
  payload: {
    census,
  },
});

export const searchCensusFail = errors => ({
  type: SEARCH_CENSUS_FAIL,
  payload: {
    errors,
  },
});

const startSearchCensus = brand => ({
  type: SEARCH_CENSUS,
  payload: {
    brand,
  },
});

export async function searchCensus(dispatch, options) {
  dispatch(startSearchCensus());
  const matchedCensus = await Promise.solve([]);
  return dispatch(searchCensusSuccess(matchedCensus));
}

export default {
  searchCensus,
  searchCensusSuccess,
  searchCensusFail,
};
