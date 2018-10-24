import {
  GET_DEMOGRAPHIC_OPTIONS,
  GET_DEMOGRAPHIC_OPTIONS_SUCCESS,
  GET_DEMOGRAPHIC_OPTIONS_FAIL,
  GROUP_BY_DEMOGRAPHIC_OPTION,
  GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS,
  GROUP_BY_DEMOGRAPHIC_OPTION_FAIL
} from 'reduxStore/census/types';

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

export const groupByDemographicOptionSuccess = statistics => ({
  type: GROUP_BY_DEMOGRAPHIC_OPTION_SUCCESS,
  payload: {
    statistics,
  },
});

export const groupByDemographicOptionFail = errors => ({
  type: GROUP_BY_DEMOGRAPHIC_OPTION_FAIL,
  payload: {
    errors,
  },
});

export async function groupByDemographicOption(dispatch, { demographicOption, }) {
  return dispatch({
    type: GROUP_BY_DEMOGRAPHIC_OPTION,
    payload: {
      selectedColumn: demographicOption,
    },
  });
}

export default {
  getDemographicOptions,
  getDemographicOptionsSuccess,
  getDemographicOptionsFail,
  groupByDemographicOptionSuccess,
  groupByDemographicOptionFail,
  groupByDemographicOption,
};
