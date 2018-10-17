import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

import { DEMONGRAPHIC_COLUMNS } from 'enum/index';
import { capitalize } from 'helpers/stringHelper';

const Dropdown = () => (
  <ButtonToolbar>
    <DropdownButton
      bsStyle="primary"
      title="Please Select"
      key="mockup-key"
      id="dropdown-basic-mockup-id"
    >
      {DEMONGRAPHIC_COLUMNS.map((column, index) => {
        const eventKey = `column-${index}`;
        return <MenuItem key={eventKey} eventKey={eventKey}>{capitalize(column)}</MenuItem>
      })}
    </DropdownButton>
  </ButtonToolbar>
);

export default Dropdown;
