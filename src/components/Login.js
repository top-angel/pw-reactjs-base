import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      emails: [],
      user: ""
    };
  }

  login(e) {
    e.preventDefault();
  }

  logOut() {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.setUser(user);
  }

  render() {
    return (
      <div>
        <span>{this.props.user ? this.props.user.displayName : "Guest"}</span>
        <form onSubmit={this.login.bind(this)}>
          <button type="submit">Log-In</button>
        </form>
        <form onSubmit={this.logOut.bind(this)}>
          <button type="submit">Log-Out</button>
        </form>
      </div>
    );
  }
}

export default User;
