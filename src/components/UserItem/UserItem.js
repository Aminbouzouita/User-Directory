import React, { Component } from 'react';
import './UserItem.css';

export default class UserItem extends Component {

  render() {
    const thumbnailPicture = this.props.thumbnail;
    const name = this.props.name;
    const dob = this.props.dob;
    const email = this.props.email;
    const address = this.props.address;
    const phone = this.props.phone;
    const password = this.props.password;
    return (
      <div className="row user-item-container" >
        <div className="col">
          <img src={thumbnailPicture} alt="" />
        </div>
        <div className="col">
          {name}
        </div>
        <div className="col">
          {address}        </div>
        <div className="col">
          {dob}        </div>
        <div className="col">
          {email}        </div>
        <div className="col">
          {phone}
        </div>
        <div className="col">
          {password}
        </div>
      </div>
    );
  }
}