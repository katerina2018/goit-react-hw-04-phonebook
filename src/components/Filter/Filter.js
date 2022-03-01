import React from 'react';
import { ContactInput, ContactLabel } from './Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <ContactLabel>
      Find contacts by name
      <ContactInput
        type="text"
        name="search"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </ContactLabel>
  );
};

export default Filter;
