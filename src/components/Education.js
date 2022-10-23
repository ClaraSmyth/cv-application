import React, { Component } from 'react';

export class Education extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2>Education</h2>

        <label htmlFor="qualificationInput">Qualification</label>
        <input
          id="qualificationInput"
          name="qualificationInput"
          type="text"
          onChange={updateDetails('qualification')}
          defaultValue={details.qualification}
        />

        <label htmlFor="issuerInput">Issued by</label>
        <input
          id="issuerInput"
          name="issuerInput"
          type="text"
          onChange={updateDetails('issuer')}
          defaultValue={details.issuer}
        />

        <label htmlFor="fromDateInput">From</label>
        <input
          id="fromDateInput"
          name="fromDateInput"
          type="text"
          onChange={updateDetails('fromDate')}
          defaultValue={details.fromDate}
        />

        <label htmlFor="toDateInput">To</label>
        <input
          id="toDateInput"
          name="toDateInput"
          type="text"
          onChange={updateDetails('toDate')}
          defaultValue={details.toDate}
        />
        <button onClick={this.props.prevPage}>Prev</button>
        <button onClick={this.props.nextPage}>Next</button>
      </form>
    );
  }
}

export default Education;
