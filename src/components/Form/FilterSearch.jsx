import Title from './Title';
import styles from './form.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChangeInput }) => {
  return (
    <div className="filter">
      <Title title="Contacts" />
      <p>Find contacts by name</p>
      <input
        onChange={onChangeInput}
        className={styles.input}
        name="filter"
        type="text"
      ></input>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeInput: PropTypes.func,
};
