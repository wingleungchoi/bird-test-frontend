import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'react-bootstrap';

import { capitalize } from 'helpers/stringHelper';

const Result = ({ statistics, selectedColumnName, }) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>{capitalize(selectedColumnName)}</th>
        <th>Count</th>
        <th>Average</th>
      </tr>
    </thead>
    <tbody>
      {
        statistics.map((e, k) => (
          <tr key={`${selectedColumnName}-${k}`}>
            <td>{k}</td>
            <td>{e.columnValue}</td>
            <td>{e.count}</td>
            <td>{e.averageAge}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

Result.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedColumnName: PropTypes.string.isRequired,
};

export default Result;
