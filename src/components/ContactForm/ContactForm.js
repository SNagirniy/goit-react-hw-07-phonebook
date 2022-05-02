import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'Redux/contactsAPI';
import { checkContact } from 'helpers/helpers';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts, isSuccess } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContact(contacts, name, isSuccess)) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }
    addContact({ name, phone: number });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          className={s.input}
          required
        />
      </label>
      <label className={s.label}>
        <span>Phone</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          className={s.input}
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contacts
      </button>
    </form>
  );
}
