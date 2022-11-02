import React, { Component } from 'react';

export class Education extends Component {
  state = {
    page: 1,
  };

  updatePage = (num) => (e) => {
    e.preventDefault();
    this.setState({ page: num });
  };

  render() {
    const { details, updateDetails } = this.props;
    const { page } = this.state;

    return (
      <form className="form">
        <h2>Education</h2>

        <div>
          <button onClick={this.updatePage(1)}>1</button>
          <button onClick={this.updatePage(2)}>2</button>
          <button onClick={this.updatePage(3)}>3</button>
        </div>

        <label htmlFor="qualificationInput">Qualification</label>
        <input
          id="qualificationInput"
          name="qualificationInput"
          type="text"
          onChange={updateDetails('education', `qualification${page}`)}
          defaultValue={details[`qualification${page}`]}
          key={`qualificationInput:qualification${page}`}
        />

        <label htmlFor="issuerInput">Issued by</label>
        <input
          id="issuerInput"
          name="issuerInput"
          type="text"
          onChange={updateDetails('education', `issuer${page}`)}
          defaultValue={details[`issuer${page}`]}
          key={`issuerInput:issuer${page}`}
        />

        <label htmlFor="fromDateInput">From</label>
        <input
          id="fromDateInput"
          name="fromDateInput"
          type="text"
          onChange={updateDetails('education', `fromDate${page}`)}
          defaultValue={details[`fromDate${page}`]}
          key={`fromDateInput:fromDate${page}`}
        />

        <label htmlFor="toDateInput">To</label>
        <input
          id="toDateInput"
          name="toDateInput"
          type="text"
          onChange={updateDetails('education', `toDate${page}`)}
          defaultValue={details[`toDate${page}`]}
          key={`toDateInput:toDate${page}`}
        />
        <div>
          <button onClick={this.props.prevPage}>Prev</button>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </form>
    );
  }
}

export default Education;
