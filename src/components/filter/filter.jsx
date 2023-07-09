import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label } from './filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <Form>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
      />
    </Form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


