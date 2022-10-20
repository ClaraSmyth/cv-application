import React, { Component } from 'react'

export class contactDetails extends Component {
  render() {
    return (
    <div>
      <h2>Contact Details</h2>

      <label htmlFor='websiteInput'>Website</label>
      <input id='websiteInput' name='websiteInput' type='text'></input>

      <label htmlFor='emailInput'>First Name</label>
      <input id='emailInput' name='emailInput' type='text'></input>

      <label htmlFor='locationInput'>Info</label>
      <input id='locationInput' name='locationInput' type='text'></input>

      <label htmlFor='phoneInput'>Info</label>
      <input id='phoneInput' name='phoneInput' type='text'></input>
    </div>
    )
  }
}

export default contactDetails