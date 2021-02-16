import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactsForm.module.css';

const ContactsFilter=({value, onChangeFilter})=> (
    <input
      type="text" 
      placeholder='Type to filter contacts'
      onChange={onChangeFilter} 
      value={value}
      className={styles.inputFilter}
    />
);

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}
export default ContactsFilter;