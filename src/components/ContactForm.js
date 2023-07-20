import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './Phonebook styled';

class ContactForm extends Component {
    static propTypes = {
      
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
      number: '',
      isNameValid: true,
      isNumberValid: true
  };

  handleChange = (event) => {
    const { name, value } = event.target;
      this.setState({ [name]: value, isNameValid: true, isNumberValid: true  });
  };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
        if (!name || !namePattern.test(name)) {
            this.setState({ isNameValid: false });
            return;
        }
        const numberPattern = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        if (!number || !numberPattern.test(number)) {
            this.setState({ isNumberValid: false });
            return;
        }
            this.props.onAddContact(name, number);
            this.setState({ name: '', number: '' });
        };
    
    

        render() {
            const { name, number, isNameValid, isNumberValid } = this.state;

            return (
                <Form onSubmit={this.handleSubmit}>
                    <Label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            $isValid={isNameValid}
                            required
                        />
                        {!isNameValid && <div style={{ color: 'red' }}>Please enter a valid name</div>}
                    </Label>
                    <Label>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={this.handleChange}
                            $isValid={isNumberValid}
                            required
                        />
                        {!isNumberValid && <div style={{ color: 'red' }}>Please enter a valid number XXX-XX-XX</div>}
                    </Label>
                    <Button type="submit">Add contact</Button>
                </Form>
            );
        }
    }

export default ContactForm;
