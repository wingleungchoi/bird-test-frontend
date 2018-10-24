import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { capitalize } from 'helpers/stringHelper';

const Dropdown = ({ options, onSelect, }) => (
  <ButtonToolbar>
    <DropdownButton
      bsStyle="primary"
      title="Please Select"
      key="mockup-key"
      id="dropdown-basic-mockup-id"
    >
      {options.map((column, index) => {
        const eventKey = `column-${index}`;
        return (
          <MenuItem
            key={eventKey}
            eventKey={column}
            onSelect={onSelect}
          >
            {capitalize(column)}
          </MenuItem>
        );
      })}
    </DropdownButton>
  </ButtonToolbar>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
