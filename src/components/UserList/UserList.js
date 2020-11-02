import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getUsers } from '../../utils/Api';
import './UserList.css'
export class UserList extends Component {

  state = {
    search: "",
    users: []
  };

  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    this.setState({
      [name]: value
    });
  };

  componentWillMount() {
    getUsers()
      .then(data => {
        this.setState({
          users: data
        });
      });
  }

  renderUserItems() {
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      const streetNumber = user.location.street.number;
      const streetName = user.location.street.name;
      const title = user.name.title;
      const dob = user.dob.date.slice(0, 10);
      const email = user.email;
      const phone = user.phone;
      const password = user.login.password;
      const thumbnail = user.picture.large;

      if (first.includes(this.state.search) ||
        last.includes(this.state.search) ||
        dob.includes(this.state.search) ||
        email.includes(this.state.search) ||
        streetName.includes(this.state.search) ||
        streetNumber.toString().includes(this.state.search) ||
        streetName.includes(this.state.search) ||
        phone.includes(this.state.search) ||
        password.includes(this.state.search)) {

        return (
          <UserItem
            key={first + last + index}
            name={title + " " + first + " " + last}
            dob={dob}
            email={email}
            address={streetNumber + " " + streetName}
            phone={phone}
            password={password}
            thumbnail={thumbnail} />
        )
      }
    })
  }

  render() {
    return (
      <div className="header">
        <label htmlFor="search" id="search">Search for</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />

        <ul>
          <div className="row title-item-container">
            <div className="col" id="imageTitle">
              <strong>Image</strong>
            </div>
            <div
              value={this.state.users}
              name="users"
              className="col"
            >
              <strong>Name</strong>
              <button className="sortedButton" onClick={this.handleSortedUsers}>?sort?</button>
            </div>
            <div className="col">
              <strong>Address</strong>
            </div>
            <div className="col">
              <strong>DOB</strong>
            </div>
            <div className="col">
              <strong>Email</strong>
            </div>
            <div className="col">
              <strong>Phone</strong>
            </div>
            <div className="col">
              <strong>Password</strong>
            </div>
          </div>
          {this.renderUserItems()}
        </ul>
      </div>
    );
  }
}