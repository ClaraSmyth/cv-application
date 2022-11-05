import React, { Component } from 'react';

export class References extends Component {
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
        <h2 className="form-title">References</h2>

        <div className="form-pages">
          <button onClick={this.updatePage(1)}>1</button>
          <button onClick={this.updatePage(2)}>2</button>
        </div>

        <label htmlFor="websiteInput">Name</label>
        <input
          id="refNameInput"
          name="refNameInput"
          type="text"
          onChange={updateDetails('references', `refName${page}`)}
          defaultValue={details[`refName${page}`]}
          key={`refNameInput:refName${page}`}
        />

        <label htmlFor="websiteInput">Phone</label>
        <input
          id="refPhoneInput"
          name="refPhoneInput"
          type="text"
          onChange={updateDetails('references', `refPhone${page}`)}
          defaultValue={details[`refPhone${page}`]}
          key={`refPhoneInput:refPhone${page}`}
        />

        <label htmlFor="websiteInput">Email</label>
        <input
          id="refEmailInput"
          name="refEmailInput"
          type="text"
          onChange={updateDetails('references', `refEmail${page}`)}
          defaultValue={details[`refEmail${page}`]}
          key={`refEmailInput:refEmail${page}`}
        />

        <div className="form-nav">
          <button onClick={this.props.prevPage}>Prev</button>
        </div>
      </form>
    );
  }
}

export default References;
