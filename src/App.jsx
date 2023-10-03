import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import FilterByName from 'components/FilterByName/FilterByName';
import ContactList from 'components/ContactList/ContactList';
import { PhoneCard, Title, TitleMain } from 'AppStyled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('Contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'Contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleOnInput = eve => {
    this.setState({ [eve.target.name]: eve.target.value });
  };

  handleAddContact = ({ name, number }) => {
    const contactInList = this.state.contacts.some(
      contact => contact.number === number
    );

    if (name && number) {
      if (!contactInList) {
        this.setState(prev => ({
          contacts: [...prev.contacts, { id: nanoid(), name, number }],
        }));
        toast.success(`${name} was added to contacts`);
      } else {
        toast.error(`${name} is already exist in contacts`);
      }
    }
  };

  handleDelContact = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };

  filterOfContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filterData = this.filterOfContacts();
    return (
      <PhoneCard>
        <TitleMain>Phone book</TitleMain>
        <ContactForm addContact={this.handleAddContact} />
        {contacts.length ? (
          <>
            <Title>Contacts</Title>
            <FilterByName
              onFilterChange={this.handleOnInput}
              filterValue={filter}
            />
            <ContactList
              contacts={filterData}
              filterValue={filter}
              deleteContact={this.handleDelContact}
            />
          </>
        ) : (
          'There are no contacts'
        )}
      </PhoneCard>
    );
  }
}

export default App;
