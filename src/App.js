import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Person from './components/Person/Person.js';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { nameInput: '', roleInput: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    console.log('Name was changed!', event.target.value);
    this.setState({ nameInput: event.target.value })
  }

  handleRoleChange = (event) => {
    console.log('Role was changed!', event.target.value);
    this.setState({ roleInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Enter the name of a famous person and the role for which they are famous.
        </p>
        <div> 
          <input onChange={this.handleNameChange} />
          <input onChange={this.handleRoleChange} />
          <br />
          {this.state.nameInput} is famous for {this.state.roleInput}
        </div>
        <Person />
      </div>
    );
  };
}

export default App;
