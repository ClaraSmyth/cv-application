import React, { Component } from 'react';

export class UserDetails extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2 className="form-title">Personal Details</h2>

        <label htmlFor="firstNameInput">First Name</label>
        <input
          id="firstNameInput"
          name="firstNameInput"
          type="text"
          onChange={updateDetails('userDetails', 'firstName')}
          defaultValue={details.firstName}
          value={details.firstName}
        />

        <label htmlFor="lastNameInput">Last Name</label>
        <input
          id="lastNameInput"
          name="lastNameInput"
          type="text"
          onChange={updateDetails('userDetails', 'lastName')}
          defaultValue={details.lastName}
          value={details.lastName}
        />

        <label htmlFor="titleInput">Job Title</label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          onChange={updateDetails('userDetails', 'jobTitle')}
          defaultValue={details.jobTitle}
          value={details.jobTitle}
        />

        <label htmlFor="infoInput">Intro</label>
        <textarea
          id="infoInput"
          name="infoInput"
          type="text"
          onChange={updateDetails('userDetails', 'intro')}
          defaultValue={details.intro}
          value={details.intro}
        />

        <div className="form-nav">
          <button onClick={this.props.autofillState}>Autofill</button>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </form>
    );
  }
}

export default UserDetails;
