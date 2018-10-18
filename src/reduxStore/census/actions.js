import { GET_DEMOGRAPHIC_OPTIONS, GET_DEMOGRAPHIC_OPTIONS_SUCCESS, GET_DEMOGRAPHIC_OPTIONS_FAIL } from 'reduxStore/census/types';

import { DEMONGRAPHIC_COLUMNS } from 'enum/index';

export const getDemographicOptionsSuccess = demographicOptions => ({
  type: GET_DEMOGRAPHIC_OPTIONS_SUCCESS,
  payload: {
    demographicOptions,
  },
});

export const getDemographicOptionsFail = errors => ({
  type: GET_DEMOGRAPHIC_OPTIONS_FAIL,
  payload: {
    errors,
  },
});

const startSearchCensus = () => ({
  type: GET_DEMOGRAPHIC_OPTIONS,
  payload: {},
});

export async function getDemographicOptions(dispatch, options) {
  dispatch(startSearchCensus());
  const demographicOptions = await (new Promise((resolve) => { resolve(DEMONGRAPHIC_COLUMNS); }));
  return dispatch(getDemographicOptionsSuccess(demographicOptions));
}

export default {
  getDemographicOptions,
  getDemographicOptionsSuccess,
  getDemographicOptionsFail,
};
