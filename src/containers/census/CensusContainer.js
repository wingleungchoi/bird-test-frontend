import * as React from 'react';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import Dropdown from 'components/basic/Dropdown';
import Result from 'components/demographic/Result';
import { censusActions, censusSelectors } from 'reduxStore/census';

const Census = (props) => {
  const { demographicOptions, isFetching, } = props;
  return (isFetching) ? (
    <div> isFetching </div>
  ) : (
    <div className="App">
      <h5>Variables</h5>
      <Dropdown demographicOptions={demographicOptions} />
      <Result />
    </div>
  );
};

Census.propTypes = {
  demographicOptions: PropTypes.arrayOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
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
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGetDemographicOptions: () => {
      censusActions.getDemographicOptions(dispatch, {});
    },
  };
};

export const CensusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CensusWithData);

export default CensusContainer;
