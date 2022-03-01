import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/person_add_icon.svg';
import Modal from './components/Modal';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
    // не работает при добавлении первого контакта ?????
    // if (
    //   nextContacts.length > prevContacts.length &&
    //   prevContacts.length !== 0
    // ) {
    //   this.toggleModal();
    // }
  }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    this.toggleModal();
    const contactNames = this.state.contacts.map(elem =>
      elem.name.toLowerCase(),
    );

    contactNames.includes(contact.name.toLowerCase())
      ? alert(`${contact.name} is already is contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const allContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    const inAlphabetContact = [
      ...allContacts.sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name),
      ),
    ];

    return inAlphabetContact;
  };

  deleteContant = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const visibleName = this.getVisibleContact();

    return (
      <Section>
        <h1 className="App">Phonebook</h1>
        <IconButton
          onClick={this.toggleModal}
          aria-label="Open modal"
          style={{ display: 'flex', marginLeft: 'auto' }}
        >
          <AddIcon width="40" height="40" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Form
              onSubmit={this.formSubmitHandler}
              onResetFilter={this.resetFilter}
            />
          </Modal>
        )}

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList value={visibleName} onDeleteContant={this.deleteContant} />
      </Section>
    );
  }
}

export default App;
