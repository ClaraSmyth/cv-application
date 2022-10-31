import React, { Component } from 'react';

export class UserDetails extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2>Details</h2>

        <label htmlFor="firstNameInput">First Name</label>
        <input
          id="firstNameInput"
          name="firstNameInput"
          type="text"
          onChange={updateDetails('userDetails', 'firstName')}
          defaultValue={details.firstName}
        />

        <label htmlFor="lastNameInput">Last Name</label>
        <input
          id="lastNameInput"
          name="lastNameInput"
          type="text"
          onChange={updateDetails('userDetails', 'lastName')}
          defaultValue={details.lastName}
        />

        <label htmlFor="infoInput">Job Title</label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          onChange={updateDetails('userDetails', 'jobTitle')}
          defaultValue={details.jobTitle}
        />

        <label htmlFor="infoInput">Intro</label>
        <input
          id="infoInput"
          name="infoInput"
          type="text"
          onChange={updateDetails('userDetails', 'intro')}
          defaultValue={details.intro}
        />

        <div>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </form>
    );
  }
}

export default UserDetails;
