import React, { Component } from 'react'

export class UserDetails extends Component {
  render() {
    return (
    <div>
      <h2>Details</h2>

      <label htmlFor='firstNameInput'>{this.props.details.firstName}</label>
      <input id='firstNameInput' name='firstNameInput' type='text'></input>

      <label htmlFor='secondNameInput'>First Name</label>
      <input id='secondNameInput' name='secondNameInput' type='text'></input>

      <label htmlFor='infoInput'>Info</label>
      <input id='infoInput' name='infoInput' type='textarea'></input>
    </div>
    )
  }
}

export default UserDetails