import React from 'react';
import styles from './form.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filterContacts, onClickDelete }) => {
  const elements = filterContacts.map(item => (
    <li className={styles.listContacts} key={item.id}>
      <p>
        {item.name} {item.number}
      </p>
      <button
        id={item.id}
        className={styles.btn}
        onClick={onClickDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return (
    <div className="contactsList">
      <ul>{elements}</ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func,
};
