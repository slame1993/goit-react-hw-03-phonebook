import React from 'react';
import styles from './form.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, type, onClickSubmit }) => {
  return (
    <>
      <button className={styles.btn} onSubmit={onClickSubmit} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func,
};
