import React, { Component } from 'react'
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';

class Form extends Component {

  state = {
    firstName: 'Test',
    lastName: '',
    jobTitle: '',
    intro: '',

    location: '',
    phone: '',
    email: '',
    website: '',
  }

  // Updates the details in state
  updateDetails = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    // const { firstName, lastName, jobTitle, intro } = this.state;
    const details = { ...this.state };

    return (
      <form>
        <UserDetails 
          details={details}
          updateDetails={this.updateDetails}
        />

        <ContactDetails 
          details={details}
          updateDetails={this.updateDetails}
        />
      </form>
    )
  }
}

export default Form
