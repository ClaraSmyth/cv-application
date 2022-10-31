import React, { Component } from 'react';

export class ContactDetails extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2>Contact Details</h2>

        <label htmlFor="websiteInput">Website</label>
        <input
          id="websiteInput"
          name="websiteInput"
          type="text"
          onChange={updateDetails('contactDetails', 'website')}
          defaultValue={details.website}
        />

        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          name="emailInput"
          type="text"
          onChange={updateDetails('contactDetails', 'email')}
          defaultValue={details.email}
        />

        <label htmlFor="locationInput">Location</label>
        <input
          id="locationInput"
          name="locationInput"
          type="text"
          onChange={updateDetails('contactDetails', 'location')}
          defaultValue={details.location}
        />

        <label htmlFor="phoneInput">Phone</label>
        <input
          id="phoneInput"
          name="phoneInput"
          type="text"
          onChange={updateDetails('contactDetails', 'phone')}
          defaultValue={details.phone}
        />
        <div>
          <button onClick={this.props.prevPage}>Prev</button>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </form>
    );
  }
}

export default ContactDetails;
