import React from 'react';
import Button from './Button';
import styles from './form.module.css';
import PropTypes from 'prop-types';

const Form = ({ onChangeInput, onClickSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onClickSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={styles.input}
        onChange={onChangeInput}
        type="text"
        name="name"
        id="username"
        required
        placeholder="Please, enter data of contact"
      />

      <label htmlFor="tel">Phone number </label>
      <input
        className={styles.input}
        onChange={onChangeInput}
        type="tel"
        name="number"
        id="tel"
        required
        placeholder="Please, enter a phone number"
      />

      <Button type="submit" text="Add contact" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func,
  onClickSubmit: PropTypes.func,
};
