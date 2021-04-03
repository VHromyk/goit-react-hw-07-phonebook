import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.scss';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/App/app-operations';
import { filterContacts } from '../../redux/ContactForm/contactForm-selectors';

const Filter = ({ list, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span>{name}</span>
          <span>{number}</span>

          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={styles.button}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  list: PropTypes.array,
  deleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  list: filterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
