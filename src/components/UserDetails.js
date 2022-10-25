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
          onChange={updateDetails('firstName')}
          defaultValue={details.firstName}
        />

        <label htmlFor="lastNameInput">Last Name</label>
        <input
          id="lastNameInput"
          name="lastNameInput"
          type="text"
          onChange={updateDetails('lastName')}
          defaultValue={details.lastName}
        />

        <label htmlFor="infoInput">Title</label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          onChange={updateDetails('title')}
          defaultValue={details.title}
        />

        <label htmlFor="infoInput">Intro</label>
        <input
          id="infoInput"
          name="infoInput"
          type="text"
          onChange={updateDetails('intro')}
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
