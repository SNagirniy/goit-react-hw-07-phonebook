import React from 'react';
import ListItem from 'components/ListItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'Redux/contactsAPI';
import Notification from 'components/Notification';
import { getVisibleContacts } from 'helpers/helpers';
import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const visibleContacts = getVisibleContacts(filter, contacts);

  if (isSuccess) {
    return (
      <ul className={s.list}>
        {visibleContacts.map(({ name, phone, id }) => {
          return <ListItem key={id} name={name} number={phone} id={id} />;
        })}
      </ul>
    );
  }
  return <Notification text={'There are no any contacts in phonebook'} />;
};

export default ContactList;
