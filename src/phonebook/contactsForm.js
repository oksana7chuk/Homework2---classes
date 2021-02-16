import React, { Component } from 'react';
import styles from './contactsForm.module.css';

export default class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = e =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.onAddContact({...this.state});
        this.reset()
    }
    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    render() {
       const {name,number} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.label}> Name 
                    <input 
                    type="text" 
                    value={name} 
                    name='name' 
                    onChange={this.handleChange} 
                    className={styles.input}>
                    </input>
                </label>
                <label className={styles.label}> Number 
                    <input
                    type="tel"
                    value={number} 
                    name='number' 
                    onChange={this.handleChange}  
                    className={styles.input}>
                    </input>
                </label>
                <p>
                    <button type="submit" className={styles.button}>Add contact</button>
                </p>
            </form>)
    }
};
