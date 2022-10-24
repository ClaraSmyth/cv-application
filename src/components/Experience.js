import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2>Experience</h2>

        <label htmlFor="titleInput">Job Title</label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          onChange={updateDetails('title')}
          defaultValue={details.title}
        />

        <label htmlFor="companyInput">Company</label>
        <input
          id="companyInput"
          name="companyInput"
          type="text"
          onChange={updateDetails('company')}
          defaultValue={details.company}
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

        <label htmlFor="descInput">Description</label>
        <input
          id="descInput"
          name="descInput"
          type="text"
          onChange={updateDetails('desc')}
          defaultValue={details.desc}
        />

        <button onClick={this.props.prevPage}>Prev</button>
      </form>
    );
  }
}

export default Experience;
