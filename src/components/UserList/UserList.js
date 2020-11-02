import React, { Component } from 'react';
import { getUsers } from '../../utils/Api';
export class UserList extends Component {

  state = {
    search: "",
    users: []
  };

  componentWillMount() {
    getUsers()
      .then(data => {
        this.setState({
          users: data
        });
      });
  }

  render() {
    return (
      <div className="header">
        <label htmlFor="search" id="search">Search for</label>
        <input
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
        </ul>
      </div>
    );
  }
}