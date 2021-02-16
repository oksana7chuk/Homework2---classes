import React, { Component } from 'react';
import ContactsForm from './contactsForm';
import ContactList from './contactList';
import ContactsFilter from './contactsFilter';
import shortid from 'shortid';
import styles from './contactsForm.module.css';

const filterContacts = (contacts, filter)=>{
    return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
 };
export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }
    componentDidMount(){
        const savedContacts = localStorage.getItem('contacts')
        if(savedContacts){
            this.setState({contacts: JSON.parse(savedContacts)})
        }

    };
    componentDidUpdate(prevProps, prevState){
        if(prevState.contacts !== this.state.contacts){
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    };
    addContact = newContact =>{
        const contactToAdd = {
            ...newContact, 
            id:shortid.generate(),
          }
        const checkNewContact = this.state.contacts.map(contact=>contact.name).includes(newContact.name)
        if(checkNewContact){
            alert(`${newContact.name} is already in contacts`)
        } else {
            this.setState(state=>({
                contacts: [...state.contacts, contactToAdd]
            }))    
        }
    }
    deleteContact = id => {
        this.setState(state=>({
            contacts: [...state.contacts.filter(contact => contact.id !==id)]
        }))
    }
    changeFilter = e => {
        this.setState({filter:e.target.value})
    }
    
    render() {
        const {contacts, filter} = this.state;
        const filteredContacts = filterContacts(contacts,filter);
     
        return (
           <div>
               <h1 className={styles.firstTitle}>Phonebook</h1>
               <ContactsForm onAddContact={this.addContact}/>  
               <h2 className={styles.title}>Contacts</h2>
               <div>
                  <ContactsFilter value={filter} onChangeFilter={this.changeFilter}/>
                  <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>  
               </div>  
            </div>
        )
    }
};
