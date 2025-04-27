import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.card}>
      <span className={css.name}>{contact.name}</span>
      <span className={css.number}>{contact.number}</span>
      <button className={css.delete} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Contact;
