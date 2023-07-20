import React from 'react';
import PropTypes from 'prop-types';
import { Input, FilterLabel } from './Phonebook styled';

const Filter = ({ value, onChangeFilter }) => (
  <FilterLabel>
    Find contacts by name
    <Input type="text" value={value} onChange={onChangeFilter} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
