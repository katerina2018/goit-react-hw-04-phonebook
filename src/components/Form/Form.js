import React, { Component } from 'react';
import {
  ContactForms,
  ContactInput,
  ContactLabel,
  ContactFormsButton,
} from './Form.styles';

class Form extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    this.props.onResetFilter();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactForms onSubmit={this.handleSubmit}>
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
            value={this.state.name}
            onChange={this.handleChange}
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
            value={this.state.number}
            onChange={this.handleChange}
          />
        </ContactLabel>
        <ContactFormsButton type="submit"> Add contact</ContactFormsButton>
      </ContactForms>
    );
  }
}

export default Form;
