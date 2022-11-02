import React, { Component } from 'react';

export class Skills extends Component {
  render() {
    const { details, updateDetails } = this.props;

    return (
      <form className="form">
        <h2>Skills</h2>

        <input
          id="skill1Input"
          name="skill1Input"
          type="text"
          onChange={updateDetails('skills', 'skill1')}
          defaultValue={details.skill1}
        />

        <input
          id="skill2Input"
          name="skill2Input"
          type="text"
          onChange={updateDetails('skills', 'skill2')}
          defaultValue={details.skill2}
        />

        <input
          id="skill3Input"
          name="skill3Input"
          type="text"
          onChange={updateDetails('skills', 'skill3')}
          defaultValue={details.skill3}
        />

        <input
          id="skill4Input"
          name="skill4Input"
          type="text"
          onChange={updateDetails('skills', 'skill4')}
          defaultValue={details.skill4}
        />

        <input
          id="skill5Input"
          name="skill5Input"
          type="text"
          onChange={updateDetails('skills', 'skill5')}
          defaultValue={details.skill5}
        />

        <input
          id="skill6Input"
          name="skill6Input"
          type="text"
          onChange={updateDetails('skills', 'skill6')}
          defaultValue={details.skill6}
        />

        <input
          id="skill7Input"
          name="skill7Input"
          type="text"
          onChange={updateDetails('skills', 'skill7')}
          defaultValue={details.skill7}
        />

        <input
          id="skill8Input"
          name="skill8Input"
          type="text"
          onChange={updateDetails('skills', 'skill8')}
          defaultValue={details.skill8}
        />

        <div>
          <button onClick={this.props.prevPage}>Prev</button>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </form>
    );
  }
}

export default Skills;
