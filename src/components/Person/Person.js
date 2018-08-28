import React, { Component } from 'react';

class Person extends Component {

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

            <div>
                Name: <input onChange={this.handleNameChange} />
                <br />
                Role: <input onChange={this.handleRoleChange} />
                <br />
                {this.state.nameInput} is famous for {this.state.roleInput}
            </div>


        );
    }
}

export default Person;