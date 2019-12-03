import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  contacts from './contacts.json';
import ContactList from './components/ContactList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Iron Contats
        </p>
        
          <ContactList contactsArr={contacts}/>

      </div>
    );
  }
}

export default App;
