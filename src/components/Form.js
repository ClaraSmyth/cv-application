import React, { Component } from 'react';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
  state = {
    page: 1,

    userDetails: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      intro: '',
    },

    contactDetails: {
      location: '',
      phone: '',
      email: '',
      website: '',
    },

    education: {
      qualification: '',
      issuer: '',
      fromDate: '',
      toDate: '',
    },

    experience: {
      jobTitle: '',
      company: '',
      fromDate: '',
      toDate: '',
      desc: '',
    },
  };

  // Updates the details in state
  updateDetails = (page, input) => (e) => {
    this.setState((prevState) => ({ [page]: { ...prevState[page], [input]: e.target.value } }));
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
        return (
          <UserDetails details={details.userDetails} updateDetails={this.updateDetails} nextPage={this.nextPage} />
        );
      case 2:
        return (
          <ContactDetails
            details={details.contactDetails}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 3:
        return (
          <Education
            details={details.education}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 4:
        return <Experience details={details.experience} updateDetails={this.updateDetails} prevPage={this.prevPage} />;
    }
  }
}

export default Form;
