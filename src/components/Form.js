import React, { Component } from 'react';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import Education from './Education';

class Form extends Component {
  state = {
    page: 1,

    firstName: '',
    lastName: '',
    jobTitle: '',
    intro: '',

    location: '',
    phone: '',
    email: '',
    website: '',

    qualification: '',
    issuer: '',
    fromDate: '',
    toDate: '',
  };

  // Updates the details in state
  updateDetails = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Updates form to next page
  nextPage = (e) => {
    e.preventDefault();
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  // Updates form to previous page
  prevPage = (e) => {
    e.preventDefault();
    const { page } = this.state;
    this.setState({ page: page - 1 });
  };

  render() {
    const details = { ...this.state };
    const { page } = this.state;

    switch (page) {
      default:
        return <UserDetails details={details} updateDetails={this.updateDetails} nextPage={this.nextPage} />;
      case 2:
        return (
          <ContactDetails
            details={details}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 3:
        return (
          <Education
            details={details}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
    }
  }
}

export default Form;
