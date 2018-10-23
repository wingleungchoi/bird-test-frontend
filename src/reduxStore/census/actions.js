import { GET_DEMOGRAPHIC_OPTIONS, GET_DEMOGRAPHIC_OPTIONS_SUCCESS, GET_DEMOGRAPHIC_OPTIONS_FAIL } from 'reduxStore/census/types';

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

export async function getDemographicOptions(dispatch) {
  return dispatch({ type: GET_DEMOGRAPHIC_OPTIONS, });
}

export default {
  getDemographicOptions,
  getDemographicOptionsSuccess,
  getDemographicOptionsFail,
};
