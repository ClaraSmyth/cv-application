import React, { Component } from 'react';

export class Experience extends Component {
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
        <h2>Experience</h2>

        <div>
          <button onClick={this.updatePage(1)}>1</button>
          <button onClick={this.updatePage(2)}>2</button>
          <button onClick={this.updatePage(3)}>3</button>
        </div>

        <label htmlFor="titleInput">Job Title</label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          onChange={updateDetails('experience', `jobTitle${page}`)}
          defaultValue={details[`jobTitle${page}`]}
          key={`jobTitlePage:jobTitle${page}`}
        />

        <label htmlFor="companyInput">Company</label>
        <input
          id="companyInput"
          name="companyInput"
          type="text"
          onChange={updateDetails('experience', `company${page}`)}
          defaultValue={details[`company${page}`]}
          key={`companyPage:company${page}`}
        />

        <label htmlFor="fromDateInput">From</label>
        <input
          id="fromDateInput"
          name="fromDateInput"
          type="text"
          onChange={updateDetails('experience', `fromDate${page}`)}
          defaultValue={details[`fromDate${page}`]}
          key={`fromDatePage:fromDate${page}`}
        />

        <label htmlFor="toDateInput">To</label>
        <input
          id="toDateInput"
          name="toDateInput"
          type="text"
          onChange={updateDetails('experience', `toDate${page}`)}
          defaultValue={details[`toDate${page}`]}
          key={`toDatePage:toDate${page}`}
        />

        <label htmlFor="descInput">Description</label>
        <input
          id="descInput"
          name="descInput"
          type="text"
          onChange={updateDetails('experience', `desc${page}`)}
          defaultValue={details[`desc${page}`]}
          key={`descPage:desc${page}`}
        />

        <div>
          <button onClick={this.props.prevPage}>Prev</button>
        </div>
      </form>
    );
  }
}

export default Experience;
