import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

import { capitalize } from 'helpers/stringHelper';

// TODO proived by backend
const DEMONGRAPHIC_COLUMNS = ['age', 'class of worker', 'industry code', 'occupation code', 'education', 'wage per hour', 'last education', 'marital status', 'major industry code', 'major occupation code', 'mace', 'hispanice', 'sex', 'member of labor', 'reason for unemployment', 'fulltime', 'capital gain', 'capital loss', 'dividends', 'income tax liability', 'previous residence region', 'previous residence state', 'household-with-family', 'household-simple', 'weight', 'msa-change', 'reg-change', 'within-reg-change', 'lived-here', 'migration prev res in sunbelt', 'num persons worked for employer', 'family members under 118', 'father birth country', 'mother birth country', 'birth country', 'citizenship', 'own business or self employed', 'fill questionnaire for veteran\'s admin', 'veterans benefits', 'weeks worked in year', 'year', 'salary range'];

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
