import React from 'react';
import PropTypes from 'prop-types';
import { FindeForm, FindeInput, FindeLabel } from './FilterByNamestyled';

const FilterByName = ({ onFilterChange, filterValue }) => {
  return (
    <FindeForm>
      <FindeLabel htmlFor="contact-filter">
        Find contact by name
        <FindeInput
          onChange={onFilterChange}
          name="filter"
          id="contact-filter"
          filter={filterValue}
        ></FindeInput>
      </FindeLabel>
    </FindeForm>
  );
};

FilterByName.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default FilterByName;
