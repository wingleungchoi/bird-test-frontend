import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { capitalize } from 'helpers/stringHelper';

const Dropdown = (props) => {
  const { demographicOptions, } = props;
  return (
    <ButtonToolbar>
      <DropdownButton
        bsStyle="primary"
        title="Please Select"
        key="mockup-key"
        id="dropdown-basic-mockup-id"
      >
        {demographicOptions.map((column, index) => {
          const eventKey = `column-${index}`;
          return <MenuItem key={eventKey} eventKey={eventKey}>{capitalize(column)}</MenuItem>
        })}
      </DropdownButton>
    </ButtonToolbar>
  );
};

Dropdown.propTypes = {
  demographicOptions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Dropdown;
