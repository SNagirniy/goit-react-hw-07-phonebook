import React from 'react';
import propTypes from 'prop-types';
import s from './ListItem.module.css';
import { useDeleteContactMutation } from 'Redux/contactsAPI';

const ListItem = ({ name, number, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      {name}: {number}
      <button className={s.delete_button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ListItem;
