import React, { Component } from 'react'
import UserDetails from './UserDetails';

class Form extends Component {

  state = {
    firstName: 'Test',
    lastName: '',
    jobTitle: '',
    intro: '',
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
      </form>
    )
  }
}

export default Form
