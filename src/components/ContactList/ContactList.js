import React from 'react';
import propTypes from 'prop-types';
import Contact from '../Contact/Contact';

import { ContactItems, ContactItem } from './ContactList.styles';

const ContactList = ({ value, onDeleteContant }) => (
  <ContactItems>
    {value.map(({ id, name, number }) => (
      <ContactItem key={id} id={id}>
        <Contact
          name={name}
          number={number}
          onDeleteContant={() => onDeleteContant(id)}
        />
      </ContactItem>
    ))}
  </ContactItems>
);

ContactList.propTypes = {
  value: propTypes.array,
};

export default ContactList;
