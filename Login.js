import React, { Component } from "react";
import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: "",
      users: [],
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    const tempObj = {
      email: this.state.email,
      password: this.state.password,
    };
    const tempar = this.state.users;
    tempar.push(tempObj);
    this.setState({ users: tempar });
  };

  render() {
    return (
      <div>
        <from name="Login" acttion="" method="">
          <h1>Login_Page</h1>
          <div>
            <lable class="label">Email :</lable>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Password :</lable>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <br />
          <br />
          <button type="submit" onClick={this.handleButtonClick}>
            Submit
          </button>
          
        </from>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {this.state.users.map((value, index) => {
            return (
              <div className="box">
                {index + 1}.Email : {value.email} | Password : {value.password}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Login;
