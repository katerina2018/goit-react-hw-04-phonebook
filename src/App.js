import  { useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/person_add_icon.svg';
import Modal from './components/Modal';


export default function App() {
  const [contacts, setContacts]=useState(()=> JSON.parse(window.localStorage.getItem('contacts')) ||[])
  const [filter, setFilter]=useState('')
  const [showModal, setShowModal]=useState(false)
  
  const formSubmitHandler = data => {
    const contact = {
      
      ...data,
    };
    toggleModal();
    const contactNames = contacts.map(elem =>
      elem.name.toLowerCase(),
    );


      const existedContact = contactNames.includes(contact.name.toLowerCase())
        if (!existedContact) {
            const id = nanoid();
            const newArray = contacts.concat({...data , id});
            localStorage.setItem("contacts", JSON.stringify(newArray));
            return setContacts(newArray);
        } else {
          alert(`${data.name} is already in contacts`);
        }
  };
   
    const changeFilter = event => {
      setFilter(event.currentTarget.value)  ;
    };

    
  
    const resetFilter = () => {
      setFilter('')  ;
    };
    const getVisibleContact = () => {
      
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
  

    const deleteContant = id => {
      const findContact=contacts.filter(contact => contact.id !== id)
    setContacts(findContact);
    localStorage.setItem("contacts", JSON.stringify(findContact));

   };
    
  
    const toggleModal = () => {
      setShowModal(!showModal) 

      
      };
    
      const visibleName = getVisibleContact();

      return (
        <Section>
          <h1 className="App">Phonebook</h1>
          <IconButton
            onClick={toggleModal}
            aria-label="Open modal"
            style={{ display: 'flex', marginLeft: 'auto' }}
          >
            <AddIcon width="40" height="40" />
          </IconButton>
  
          {showModal && (
            <Modal onClose={toggleModal}>
              <Form
                 onSubmit={formSubmitHandler}
                onResetFilter={resetFilter}
              />
            </Modal>
          )}
  
          <Filter value={filter} onChange={changeFilter} />
  
          <ContactList value={visibleName} onDeleteContant={deleteContant} />
        </Section>
      );
    }
  

