import { useState } from 'react';

import {
  ContactForms,
  ContactInput,
  ContactLabel,
  ContactFormsButton,
} from './Form.styles';

export default function Form( {onSubmit, onResetFilter}){
 
  const [name, setName]=useState('')
  const [number, setNumber]=useState('')

  const handleChange =event =>{
    const { name, value } = event.currentTarget;
   switch (name) {
     case 'name':
       setName(value)
       break;
    case 'number':
        setNumber(value)
        break;
     default:
      return;
   }
  };
 const reset = () => {
  setName('')
  setNumber('')
  };

    const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    reset();
    onResetFilter();
  };



  return (
    <ContactForms onSubmit={handleSubmit}>
    
      <ContactLabel>
        Name:
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          autoFocus="on"
          value={name}
          onChange={handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          value={number}
          onChange={handleChange}
        />
      </ContactLabel>
      <ContactFormsButton type="submit"> Add contact</ContactFormsButton>
    </ContactForms>
  );
  
};


