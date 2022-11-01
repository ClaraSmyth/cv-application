import React, { Component } from 'react';
import UserDetails from './UserDetails';
import ContactDetails from './ContactDetails';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

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
      qualification1: '',
      issuer1: '',
      fromDate1: '',
      toDate1: '',

      qualification2: '',
      issuer2: '',
      fromDate2: '',
      toDate2: '',

      qualification3: '',
      issuer3: '',
      fromDate3: '',
      toDate3: '',
    },

    experience: {
      jobTitle1: '',
      company1: '',
      fromDate1: '',
      toDate1: '',
      desc1: '',

      jobTitle2: '',
      company2: '',
      fromDate2: '',
      toDate2: '',
      desc2: '',

      jobTitle3: '',
      company3: '',
      fromDate3: '',
      toDate3: '',
      desc3: '',
    },

    skills: {
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      skill6: '',
      skill7: '',
      skill8: '',
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
        return (
          <Experience
            details={details.experience}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
      case 5:
        return (
          <Skills
            details={details.skills}
            updateDetails={this.updateDetails}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        );
    }
  }
}

export default Form;
