import React from 'react';
import PropTypes from 'prop-types';
import { ButtonForm, Form, Input, LabelForm } from './ContactFormStyled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleOnInput = eve => {
    this.setState({ [eve.target.name]: eve.target.value });
  };

  onSubmit = eve => {
    const { name, number } = this.state;
    eve.preventDefault();
    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <LabelForm htmlFor="name">
            Name
            <Input
              id="name"
              type="text"
              name="name"
              pattern="^[\p{L}' ]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnInput}
              value={name}
            />
          </LabelForm>
          <LabelForm htmlFor="number">
            Number
            <Input
              id="number"
              type="tel"
              name="number"
              pattern="^\+380\d{9}$"
              title="Phone number must be like +380*********"
              placeholder="+38**********"
              required
              onChange={this.handleOnInput}
              value={number}
            />
          </LabelForm>
          <ButtonForm type="submit">Add contact</ButtonForm>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
