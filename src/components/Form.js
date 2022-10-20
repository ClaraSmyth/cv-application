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

  // Next page 

  render() {
    const { firstName, lastName, jobTitle, intro } = this.state;
    const details = { firstName, lastName, jobTitle, intro };

    return (
      <form>
        <UserDetails 
          details={details}
        />

        <ContactDetails 
          details={details}
        />
      </form>
    )
  }
}

export default Form
