import React from 'react';
import propTypes from 'prop-types';
import { HiOutlineUser, HiMinusCircle } from 'react-icons/hi';
import { ContactListButton } from './Contact.styles';

const Contact = ({ name, number, onDeleteContant }) => (
  <>
    {<HiOutlineUser />}
    {name}: {number}
    <ContactListButton type="button" onClick={onDeleteContant}>
      Delete {<HiMinusCircle />}
    </ContactListButton>
  </>
);

Contact.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
  onDeleteContant: propTypes.func,
};

export default Contact;
