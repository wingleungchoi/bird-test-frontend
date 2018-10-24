export const getDemographicOptions = state => state.census.demographicOptions;
export const getIsFetching = state => state.census.isFetching;
export const getIsGrouping = state => state.census.isGrouping;
export const getStatistics = state => state.census.statistics;
export const getSelectedColumn = state => state.census.selectedColumn;

export default {
  getDemographicOptions,
  getIsFetching,
  getIsGrouping,
  getStatistics,
  getSelectedColumn,
};
