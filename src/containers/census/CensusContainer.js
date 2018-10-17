import * as React from 'react';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';

import Dropdown from 'components/basic/Dropdown';
import Result from 'components/demographic/Result';

const Census = (props) => {
  return (
    <div className="App">
      <h5>Variables</h5>
      <Dropdown />
      <Result />
    </div>
  );
};

const CensusWithData = lifecycle({
})(Census);

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export const CensusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CensusWithData);

export default CensusContainer;
