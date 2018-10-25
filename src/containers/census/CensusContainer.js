import * as React from 'react';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import Dropdown from 'components/basic/Dropdown';
import Result from 'components/demographic/Result';
import { censusActions, censusSelectors } from 'reduxStore/census';
import { capitalize } from 'helpers/stringHelper';

const Census = ({
  demographicOptions,
  handleGroupByDemographicOption,
  isFetching,
  isGrouping,
  selectedColumnName,
  statistics,
}) => (
  (isFetching) ? (
    <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" /></div>
  ) : (
    <div className="App">
      <h5>Variables</h5>
      <Dropdown
        title={capitalize(selectedColumnName || 'Please Select')}
        options={demographicOptions}
        onSelect={handleGroupByDemographicOption}
      />
      {
        (isGrouping) ? (
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" />
          </div>
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
