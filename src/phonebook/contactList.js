import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactsForm.module.css';
import ContactListItem from './contactListItem';

const ContactList = ({contacts, onDeleteContact})=>(
   <div>
       {contacts.length>0 ? (
       <ul className={styles.list} >
           {contacts.map(contact=>(
           <li key={contact.id}>
               <ContactListItem name={contact.name} number={contact.number} onDeleteContact={()=>onDeleteContact(contact.id)}/>
            </li>))}
        </ul>) : (<p>Your phonebook is empty!</p>)}
    </div>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList; 