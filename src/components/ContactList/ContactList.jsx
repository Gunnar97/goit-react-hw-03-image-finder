import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDel, ContactsItem, ContactsList } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
  const contactsList = contacts.map(contact => {
    return (
      <ContactsItem className="contact-item" id={contact.id} key={contact.id}>
        <span className="contact-name">
          {contact.name} {contact.number}
        </span>
        <ButtonDel type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </ButtonDel>
      </ContactsItem>
    );
  });
  return (
    <>
      <ContactsList>{contactsList}</ContactsList>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
