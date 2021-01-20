import React, { Component } from 'react';

class Phonebook extends Component {
    static defaultProps = {
        
    };
    static propTypes = {};
    state = {
        contacts: [],
        name: ''
      
      }

    render() {
       const {name} = this.state
        return (
        <div>
            <h1>Phonebook</h1>
            <form name="myForm">
            <label for="fname"> Name </label>  
            <input type="text" name="fname"></input>
            <input type="submit" value="Submit"></input>
            </form>
            <h2>Contacts</h2>
            <ul>
                <li>{name}</li>
            </ul>
        </div>);
    }
};

export default Phonebook;