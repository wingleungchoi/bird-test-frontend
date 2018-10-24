import * as React from 'react';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import Dropdown from 'components/basic/Dropdown';
import Result from 'components/demographic/Result';
import { censusActions, censusSelectors } from 'reduxStore/census';

const Census = ({
  demographicOptions,
  handleGroupByDemographicOption,
  isFetching,
  isGrouping,
  selectedColumnName,
  statistics,
}) => (
  (isFetching) ? (
    <div> isFetching </div>
  ) : (
    <div className="App">
      <h5>Variables</h5>
      <Dropdown
        options={demographicOptions}
        onSelect={handleGroupByDemographicOption}
      />
      {
        (isGrouping) ? (
          <div> isGrouping </div>
        ) : (
          <Result selectedColumnName={selectedColumnName} statistics={statistics} />
        )
      }
    </div>
  )
);

Census.propTypes = {
  demographicOptions: PropTypes.arrayOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
  isGrouping: PropTypes.bool.isRequired,
  statistics: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedColumnName: PropTypes.string.isRequired,
  handleGroupByDemographicOption: PropTypes.func.isRequired,
};

const CensusWithData = lifecycle({
  componentWillMount() {
    // query cars when componentDidMount
    const { handleGetDemographicOptions, } = this.props;
    handleGetDemographicOptions();
  },
})(Census);

const mapStateToProps = state => ({
  demographicOptions: censusSelectors.getDemographicOptions(state),
  isFetching: censusSelectors.getIsFetching(state),
  statistics: censusSelectors.getStatistics(state),
  isGrouping: censusSelectors.getIsGrouping(state),
  selectedColumnName: censusSelectors.getSelectedColumn(state),
});

const mapDispatchToProps = dispatch => (
  {
    handleGetDemographicOptions: () => {
      censusActions.getDemographicOptions(dispatch, {});
    },
    handleGroupByDemographicOption: (demographicOption) => {
      censusActions.groupByDemographicOption(dispatch, { demographicOption, });
    },
  }
);

export const CensusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CensusWithData);

export default CensusContainer;
